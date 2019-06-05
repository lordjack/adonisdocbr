import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SummaryComponent } from './summary/summary.component';
import { AboutComponent } from './preface/about/about.component';
import { UpgradeGuideComponent } from './preface/upgrade-guide/upgrade-guide.component';
import { ContributionGuideComponent } from './preface/contribution-guide/contribution-guide.component';

const routes: Routes = [
  {path: '', component: SummaryComponent},
  {path: 'preface/about', component: AboutComponent},
  {path: 'preface/upgrade-guide', component: UpgradeGuideComponent},
  {path: 'preface/contribution-guide', component: ContributionGuideComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
