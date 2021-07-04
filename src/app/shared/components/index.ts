import { SpinnerComponent } from './spinner/spinner.component';
import { sharedCardComponents } from './cards';

export const sharedComponents = [
  ...sharedCardComponents,
  SpinnerComponent,
];

export * from './spinner/spinner.component';
