import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { AboutComponent } from './preface/about/about.component';
import { UpgradeGuideComponent } from './preface/upgrade-guide/upgrade-guide.component';
import { ContributionGuideComponent } from './preface/contribution-guide/contribution-guide.component';
import { RequestLifecycleComponent } from './concept/request-lifecycle/request-lifecycle.component';
import { IocContainerComponent } from './concept/ioc-container/ioc-container.component';
import { ServiceProvidersComponent } from './concept/service-providers/service-providers.component';
import { IgnitorComponent } from './concept/ignitor/ignitor.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},

  {path: 'preface/about', component: AboutComponent},
  {path: 'preface/upgrade-guide', component: UpgradeGuideComponent},
  {path: 'preface/contribution-guide', component: ContributionGuideComponent},

  {path: 'concept/request-lifecycle', component: RequestLifecycleComponent},
  {path: 'concept/ioc-container', component: IocContainerComponent},
  {path: 'concept/service-providers', component: ServiceProvidersComponent},
  {path: 'concept/ignitor', component: IgnitorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
