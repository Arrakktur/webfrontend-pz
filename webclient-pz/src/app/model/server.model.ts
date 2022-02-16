//Модели
export class Server{
    constructor(
        public name: string = 'default_server',
        public status?: string,
        public active: boolean = false,
        public mods: ModList = new ModList(),
    ){};
}

export class ModList{
    constructor(
        public mods: Mod[] = [],
    ){};
}

export class Mod{
    constructor(
        public name: string = 'default name',
        public id: string = 'default id',
        public link: string = 'link',
        public active: boolean = true,
    ){};
}