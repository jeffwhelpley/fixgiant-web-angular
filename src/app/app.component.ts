import { Component, Inject } from '@angular/core';
import { CurrentPlatform } from './platform';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    constructor(@Inject(CurrentPlatform) public platform: string) {}
}
