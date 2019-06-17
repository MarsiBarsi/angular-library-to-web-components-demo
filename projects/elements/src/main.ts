import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {ButtonElementModule} from './angular-components-library/button/button.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(ButtonElementModule)
    .catch(err => console.error(err));
