import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {App1SharedModule} from '../../projects/app1/src/app/app.module';
import {App2SharedModule} from '../../projects/app2/src/app/app.module';
import {HolSharedModule} from '../../projects/hands-on-labs/src/app/hol.module';

const routes: Routes = [
  {
    path: 'app1',
    loadChildren: '../../projects/app1/src/app/app.module#App1SharedModule'
  },
  {
    path: 'app2',
    loadChildren: '../../projects/app2/src/app/app.module#App2SharedModule'
  },
  {
    path: 'hands-on-labs',
    loadChildren: () => import('../../projects/hands-on-labs/src/app/hol.module').then((m) => m.HolModule)
  },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule) },
  {path: '**', redirectTo: '/app1/one'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    App1SharedModule.forRoot(),
    App2SharedModule.forRoot(),
    HolSharedModule.forRoot()
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
