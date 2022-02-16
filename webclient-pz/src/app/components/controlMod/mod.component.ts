import { Component } from '@angular/core';
import { ModList, Server } from 'src/app/model/server.model';
import { ServerRepository } from 'src/app/model/product.repository';

@Component({
    selector: 'app-mod',
    templateUrl: './mod.component.html',
    styleUrls: ['./mod.component.scss'],
})

export class ModComponent {
    title: string = 'Настройки модов';
    servers: Server[];
    activeTab: number = 0;

    constructor(
        private repository: ServerRepository,
    ){
        this.servers = this.repository.getServers();
    };

    setActive(index: number){
        this.activeTab = index;
    }

    getServers(): Server[]{
        return this.repository.getServers();
    }

    getServer(name: string): Server | undefined{
        return this.repository.getServer(name);
    }

    getMods(name: string): ModList | undefined{
        return this.repository.getServer(name)?.mods;
    }
}