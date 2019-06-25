import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        loadChildren: './region/region.module#MyLittleSystemRegionModule'
      },
      {
        path: 'country',
        loadChildren: './country/country.module#MyLittleSystemCountryModule'
      },
      {
        path: 'location',
        loadChildren: './location/location.module#MyLittleSystemLocationModule'
      },
      {
        path: 'department',
        loadChildren: './department/department.module#MyLittleSystemDepartmentModule'
      },
      {
        path: 'task',
        loadChildren: './task/task.module#MyLittleSystemTaskModule'
      },
      {
        path: 'employee',
        loadChildren: './employee/employee.module#MyLittleSystemEmployeeModule'
      },
      {
        path: 'job',
        loadChildren: './job/job.module#MyLittleSystemJobModule'
      },
      {
        path: 'job-history',
        loadChildren: './job-history/job-history.module#MyLittleSystemJobHistoryModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyLittleSystemEntityModule {}
