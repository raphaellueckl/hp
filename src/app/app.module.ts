import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {OverviewComponent} from './dashboard/overview/overview.component';
import {ProjectsComponent} from './dashboard/projects/projects.component';
import {DonationsComponent} from './dashboard/donations/donations.component';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard/dashboard-routing.module';
import { GithubComponent } from './dashboard/github/github.component';
import { MinecraftComponent } from './dashboard/minecraft/minecraft.component';
import { MarkdownModule } from 'angular2-markdown';
import {AUTH_PROVIDERS, AuthService} from './auth.service';
import {LoggedInGuard} from './logged-in.guard';
import {LoginComponent} from './dashboard/auth/login/login.component';
import {MemberComponent} from './dashboard/auth/member/member.component';
import {LogoutComponent} from './dashboard/auth/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OverviewComponent,
    DonationsComponent,
    GithubComponent,
    ProjectsComponent,
    MinecraftComponent,
    LoginComponent,
    MemberComponent,
    LogoutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [
    AuthService,
    LoggedInGuard,
    // AUTH_PROVIDERS,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
