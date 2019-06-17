import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {BadgeElementModule} from './badge.module';

enableProdMode();

platformBrowserDynamic()
    .bootstrapModule(BadgeElementModule)
    .catch(err => console.error(err));
