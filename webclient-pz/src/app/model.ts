export class Model{
    user;
    items;
    constructor(){
        this.user = "Adam";
        this.items = 
        [
            new TodoItem("Buy Flowers", false),
            new TodoItem("Get Shoes", false),
            new TodoItem("Buy Flowers", false),
            new TodoItem("Buy Flowers", false),
        ];
    }
}

export class TodoItem{
    action;
    done;

    constructor(action :string, done :boolean){
        this.action = action;
        this.done = done;
    }
}