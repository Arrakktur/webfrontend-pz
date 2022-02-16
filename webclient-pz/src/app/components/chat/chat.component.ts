import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-mod',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.scss'],
})

export class ChatComponent {
    private readonly host = 'http://91.201.254.176:34853/control';
    private readonly command = {
        getMessage: "command=getMessage",
        postMessage: "command=newMessage&message=",
    }
    private readonly headers = {
        headers: {
            "Content-type": "application/x-www-form-urlencoded"
        }
    }
    title = "Чат"
    message = [];
    errorText = false;
    textMessage = "";

    constructor(
        private http: HttpClient,
    )
    {
        this.getMessage();
    }

    getMessage(){
        this.http.post(this.host, this.command.getMessage, this.headers)
        .subscribe((data:any) => {
            this.message = data;
        });
    }

    postMessage(){
        if (this.textMessage !== ""){
            this.errorText = false;
            this.http.post(this.host, this.command.postMessage + this.textMessage, this.headers)
            .subscribe((data:any) => {
                this.message = data;
            });
            this.textMessage = '';
            this.getMessage();
        }else{
            this.errorText = true;
        }
    }
}