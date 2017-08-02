import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {ProjectsComponent} from './projects/projects.component';
import {DonationsComponent} from './donations/donations.component';
import {GithubComponent} from './github/github.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview',  component: OverviewComponent },
  { path: 'projects',  component: ProjectsComponent },
  { path: 'github',  component: GithubComponent },
  { path: 'donations',  component: DonationsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class DashboardRoutingModule {}
