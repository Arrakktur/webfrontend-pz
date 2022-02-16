import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})

export class HeaderComponent {
    items = [
        {
            'name': 'Профиль',
            'link': 'profile',
        },
        {
            'name': 'Управление серверами',
            'link': 'servers',
        },
        {
            'name': 'Настройки модов',
            'link': 'mods',
        },
        {
            'name': 'Настройка параметров серверов',
            'link': 'params',
        },
        {
            'name': 'Чат',
            'link': 'chat',
        },
    ]
}