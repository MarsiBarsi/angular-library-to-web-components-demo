import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ButtonModule, InputModule} from 'projects/angular-components-library/src/public-api';
import {BadgeModule} from 'projects/another-angular-components-library/src/public-api';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, ButtonModule, BadgeModule, InputModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
