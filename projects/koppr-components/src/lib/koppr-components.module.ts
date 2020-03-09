import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

//
// Utils lib
//

import { UtilsModule, LoggerService } from 'utils';
import { AngularMaterialModule } from 'utils';

//
// Bar components
//

import { ActivityBarComponent } from './components/activity-bar/activity-bar.component';
import { CommandBarComponent } from './components/command-bar/command-bar.component';

//
// Dialog components
//

import { AlertDialogComponent } from './components/dialogs/alert-dialog/alert-dialog.component';
import { ConfirmDialogComponent } from './components/dialogs/confirm-dialog/confirm-dialog.component';

const kopprComponents = [
  ActivityBarComponent,
  CommandBarComponent,
  AlertDialogComponent,
  ConfirmDialogComponent
] ;

@NgModule({
  imports: [
    AngularMaterialModule,
    CommonModule,
    FlexLayoutModule,
    UtilsModule
  ],
  declarations: [
    ...kopprComponents
    ],
  exports: [
    ...kopprComponents
    ],
  entryComponents: [
    ...kopprComponents
  ]
})
export class kopprComponentsModule {

  constructor(private logger: LoggerService) {

    this.logger.info('koppr Components Module initialised');
  }

}
