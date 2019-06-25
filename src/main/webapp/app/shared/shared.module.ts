import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyLittleSystemSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [MyLittleSystemSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [MyLittleSystemSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyLittleSystemSharedModule {
  static forRoot() {
    return {
      ngModule: MyLittleSystemSharedModule
    };
  }
}
