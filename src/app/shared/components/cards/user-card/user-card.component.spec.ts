import { TestBed, ComponentFixture, fakeAsync } from '@angular/core/testing';

import { CityStatus } from '../../../interfaces';
import { UserCardComponent } from './user-card.component';
import { CommonMocks, MOCK_CITY } from '../../../../testing/values';
import { detectChanges, TestingModule } from '../../../../testing';

let component: UserCardComponent;
let fixture: ComponentFixture<UserCardComponent>;
let element: HTMLElement;
let cityStatus: HTMLElement | null;

describe('USER CARD COMPONENT', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        TestingModule.wrapImports([]),
      ],
    });

    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    cityStatus = element.querySelector('[data-city-status]');

    component.user = CommonMocks.users[0];
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('UI TESTS', () => {
    describe('cityStatus should equals to regular if no restriction', () => {
      const getCityStatusElement = (): HTMLElement | null => element.querySelector('[data-city-status]');;

      it('cityStatus should equals to regular if no restriction', fakeAsync(() => {
        component.user.address.city = '*';
        detectChanges(fixture);
        expect(getCityStatusElement()?.innerText).toMatch(CityStatus.REGULAR);
      }));

      it('cityStatus should equals to current if city is CURRENT', fakeAsync(() => {
        component.user.address.city = MOCK_CITY.CURRENT;
        detectChanges(fixture);
        expect(getCityStatusElement()?.innerText).toMatch(CityStatus.CURRENT);
      }));

      it('cityStatus should equals to inactive if city is DISABLED', fakeAsync(() => {
        component.user.address.city = MOCK_CITY.DISABLED_CITY_1;
        detectChanges(fixture);
        expect(getCityStatusElement()?.innerText).toMatch(CityStatus.INACTIVE);
      }));
    });
  });
});
