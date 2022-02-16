import { Component } from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss'],
})

export class ProfileComponent {
   title = "Профиль";
   name = "Arrakktura";
   description = "Описание отсутствует";
   level = 12;
}