import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    OverviewComponent,
    DonationsComponent,
    GithubComponent,
    ProjectsComponent,
    MinecraftComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    DashboardRoutingModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
