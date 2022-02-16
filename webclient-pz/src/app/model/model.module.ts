import { NgModule } from "@angular/core";
import { ServerRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";

@NgModule({
    providers: [ServerRepository, StaticDataSource]
})

export class ModelModule{

}