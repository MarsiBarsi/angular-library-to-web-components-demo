import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {BadgeComponent, BadgeModule} from '../../../../another-angular-components-library/src/public-api';

@NgModule({
    imports: [BrowserModule, BadgeModule],
    entryComponents: [BadgeComponent],
})
export class BadgeElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, BadgeComponent, 'badge');
    }
}
