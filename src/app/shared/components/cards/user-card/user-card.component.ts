import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { CityStatus, User } from '../../../interfaces';
import { ConfigService } from '../../../../services';

@Component({
  selector: 'user-card',
  templateUrl: 'user-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user!: User;

  constructor(private configService: ConfigService) {
  }

  get cityStatus(): CityStatus {
    const config = this.configService.config;

    if (config.currentCity === this.user.address.city) {
      return CityStatus.CURRENT;
    }

    if (config.disabledCities.includes(this.user.address.city)) {
      return CityStatus.INACTIVE;
    }

    return CityStatus.REGULAR;
  }
}
