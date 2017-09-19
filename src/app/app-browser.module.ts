import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CurrentPlatform } from './platform';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { TicketComponent } from './ticket/ticket.component';

@NgModule({
    declarations: [AppComponent, CreateComponent, HomeComponent, LoginComponent, SearchComponent, TicketComponent],
    imports: [
        BrowserModule.withServerTransition({ appId: 'universal' }),
        RouterModule.forRoot([
            { path: '', component: HomeComponent },
            { path: 'x/search', component: SearchComponent },
            { path: 'x/create', component: CreateComponent },
            { path: 'x/login', component: LoginComponent },
            { path: 'ticket/:ticketId', component: TicketComponent }
        ])
    ],
    providers: [{ provide: CurrentPlatform, useValue: 'Browser' }],
    bootstrap: [AppComponent]
})
export class AppBrowserModule {}
