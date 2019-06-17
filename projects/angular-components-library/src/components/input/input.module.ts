import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InputComponent} from './input.component';

@NgModule({
    declarations: [InputComponent],
    imports: [CommonModule, FormsModule],
    exports: [InputComponent],
})
export class InputModule {}
