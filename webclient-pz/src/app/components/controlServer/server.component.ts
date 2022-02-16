import { Component } from '@angular/core';
import { Server } from 'src/app/model/server.model';
import { ServerRepository } from 'src/app/model/product.repository';
import { HttpClient } from '@angular/common/http';
import { configs } from "./../../model/commandServer.service";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
})

export class ServerComponent {
    private readonly configs = new configs();

    title: string = 'Управление серверами';

    constructor(
        private repository: ServerRepository,
        private http: HttpClient,
    ){
        
    };

    getServers(): Server[]{
        return this.repository.getServers();
    }

    getStage(name: string): boolean | undefined{
        return this.repository.getServer(name)?.active;
    }

    serverStart(name: string){
        this.http.post(this.configs.host, this.configs.commandServer.start + name, {headers: this.configs.params.headers, responseType: 'text'})
        .subscribe((data:any) => {
            if (data == '1'){
                this.repository.setServerStatus(name, 'Работает', true);
            }
        });
    }

    serverStop(name: string){
        this.http.post(this.configs.host, this.configs.commandServer.stop + name, {headers: this.configs.params.headers, responseType: 'text'})
        .subscribe((data:any) => {
            if (data == '1'){
                this.repository.setServerStatus(name, 'Не работает', false);
            }
        });
    }

    serverError(){
        alert('Команда не работает(')
    }
}