import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { AppBrowserModule } from './app-browser.module';
import { AppComponent } from './app.component';
import { CurrentPlatform } from './platform';

@NgModule({
    imports: [AppBrowserModule, ServerModule],
    providers: [{ provide: CurrentPlatform, useValue: 'Server' }],
    bootstrap: [AppComponent]
})
export class AppServerModule {}
