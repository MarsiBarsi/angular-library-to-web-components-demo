import {Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'lib-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
    @Input()
    value = '';

    @Input()
    placeholder = '';

    @Output()
    readonly valueChange = new EventEmitter<string>();

    onInputValueChange(value: string) {
        this.valueChange.emit(value);
    }
}
