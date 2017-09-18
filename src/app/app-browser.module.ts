import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentPlatform } from './platform';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule.withServerTransition({ appId: 'universal' })],
    providers: [{ provide: CurrentPlatform, useValue: 'Browser' }],
    bootstrap: [AppComponent]
})
export class AppBrowserModule {}
