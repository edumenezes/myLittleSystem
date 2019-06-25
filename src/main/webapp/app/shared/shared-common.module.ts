import { NgModule } from '@angular/core';

import { MyLittleSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [MyLittleSystemSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [MyLittleSystemSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class MyLittleSystemSharedCommonModule {}
