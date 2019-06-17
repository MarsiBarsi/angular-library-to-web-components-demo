import {Component} from '@angular/core';
import {BadgeColors} from 'projects/another-angular-components-library/src/enums/badgeColors';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less'],
})
export class AppComponent {
    readonly itemsToSelect = ['First', 'Second', 'More one'];

    message: string | null = null;

    badgeColor: BadgeColors = BadgeColors.PRIMARY;

    onButtonClick() {
        this.badgeColor = this.badgeColor === BadgeColors.PRIMARY ? BadgeColors.SECONDARY : BadgeColors.PRIMARY;
    }
}
