import {Component, Input, ChangeDetectionStrategy, HostBinding} from '@angular/core';
import {BadgeColors} from '../../enums/badgeColors';

@Component({
    selector: 'lib-badge',
    templateUrl: './badge.component.html',
    styleUrls: ['./badge.component.less'],
})
export class BadgeComponent {
    @Input()
    value: string | null = null;

    @Input()
    fallbackValue: string | null = null;

    @Input()
    @HostBinding('style.backgroundColor')
    color: BadgeColors = BadgeColors.PRIMARY;
}
