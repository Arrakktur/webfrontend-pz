import { Component } from '@angular/core';

@Component({
    selector: 'params-mod',
    templateUrl: './params.component.html',
    styleUrls: ['./params.component.scss'],
})

export class ServerParamsComponent {
    title: string = 'Управление параметрами сервера';
}