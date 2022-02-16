import { Injectable } from "@angular/core";
import { Server, ModList, Mod } from "./server.model";
import { HttpClient } from '@angular/common/http';
import { configs } from "./commandServer.service";

//Зполнение модели данных 
@Injectable()
export class StaticDataSource {
    private readonly configs = new configs();

    //Список серверов
    private servers: Server[] = [
        new Server('pzServer', 'Неизвестно', false, new ModList()),
        new Server('pzServer_public', 'Неизвестно', false, new ModList()),
    ]

    constructor(
        private http: HttpClient,
    ){
        this.setMods();
        this.setStatus();
    }

    /**
     * Заполнение модели серверов модами
     */
    private setMods(){
        let arrayModsName, arrayModsId;
        this.servers.forEach((server) => {
            this.http.post(this.configs.host, this.configs.commandServer.getMods + server.name, {headers: this.configs.params.headers, responseType: 'text'})
            .subscribe((data:any) => {
                let arrayModsNameList = data.split('&');
                arrayModsName = arrayModsNameList[0].split(';')
                arrayModsId = arrayModsNameList[1].split(';')
                for(let i = 0; i < arrayModsName.length - 1; i++){
                    server.mods.mods.push(new Mod(arrayModsName[i], arrayModsId[i], `https://steamcommunity.com/sharedfiles/filedetails/?id=${arrayModsId[i]}`))
                }
            });
        })
    }

    /**
     * Получение статуса сервера
     */
    private setStatus(){
        this.servers.forEach((server) => {
            this.http.post(this.configs.host, this.configs.commandServer.getStage + server.name, {headers: this.configs.params.headers, responseType: 'text'})
            .subscribe((data:any) => {
                if (data == '0'){
                    server.status = "Не работает";
                    server.active = false;
                }
                else if (data == '1'){
                    server.status = "Работает";
                    server.active = true;
                }
            });
        })
    }

    getServers(): Server[]{
        return this.servers;
    }
}