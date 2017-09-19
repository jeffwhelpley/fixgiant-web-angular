import { Component, Inject } from '@angular/core';
import { CurrentPlatform } from './platform';

@Component({
    selector: 'app-root',
    template: `
        <a routerLink="/">Home</a> | 
        <a routerLink="/x/search">Search Tickets</a> | 
        <a routerLink="/x/create">Create Ticket</a> | 
        <a routerLink="/x/login">Login</a>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    title = 'app';

    constructor(@Inject(CurrentPlatform) public platform: string) {}
}
