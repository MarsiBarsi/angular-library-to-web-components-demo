import {Injector, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {ElementModule} from '../../abstract/element.module';
import {InputModule, InputComponent} from '../../../../angular-components-library/src/public-api';

@NgModule({
    imports: [BrowserModule, InputModule],
    entryComponents: [InputComponent],
})
export class InputElementModule extends ElementModule {
    constructor(injector: Injector) {
        super(injector, InputComponent, 'input');
    }
}
