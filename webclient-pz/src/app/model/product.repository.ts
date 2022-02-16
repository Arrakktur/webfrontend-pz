import { Injectable } from "@angular/core"; 
import { Mod, Server } from "./server.model";
import { StaticDataSource } from "./static.datasource";

//Репозиторий модели
@Injectable()
export class ServerRepository{
    private servers: Server[] = [];

    constructor(
        private dataSourse: StaticDataSource,
    ){
        this.servers = this.dataSourse.getServers();
    };

    getServers(): Server[]{
        return this.servers;        
    }

    getServer(name: string): Server | undefined{
        return this.servers.find((server) => { return server.name == name });
    }

    setServerStatus(name: string, status: string, active: boolean){
        this.servers.find(s => s.name = name)!.status = status;
        this.servers.find(s => s.name = name)!.active = active;
    }
}