import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {ProjectsComponent} from './projects/projects.component';
import {DonationsComponent} from './donations/donations.component';
import {GithubComponent} from './github/github.component';
import {MinecraftComponent} from './minecraft/minecraft.component';
import {LoggedInGuard} from './auth/logged-in.guard';
import {LoginComponent} from './auth/login/login.component';
import {MemberComponent} from './auth/member/member.component';
import {LogoutComponent} from './auth/logout/logout.component';
import {MusicNotesComponent} from './music-notes/music-notes.component';

const routes: Routes = [
  {path: '', redirectTo: '/overview', pathMatch: 'full'},
  {path: 'overview', component: OverviewComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'github', component: GithubComponent},
  {path: 'donations', component: DonationsComponent},
  {path: 'minecraft', component: MinecraftComponent},
  {path: 'music-notes', component: MusicNotesComponent},
  {path: 'member', component: MemberComponent, canActivate: [LoggedInGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
