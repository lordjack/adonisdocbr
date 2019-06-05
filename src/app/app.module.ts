import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HighlightModule } from 'ngx-highlightjs';
import javascript from 'highlight.js/lib/languages/javascript.js';
export function hljsLanguages() {
  return [
    {name: 'js', func: javascript}
  ];
}
import {HighlightResult } from 'ngx-highlightjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './preface/about/about.component';
import { UpgradeGuideComponent } from './preface/upgrade-guide/upgrade-guide.component';
import { ContributionGuideComponent } from './preface/contribution-guide/contribution-guide.component';
import { SummaryComponent } from './summary/summary.component';
import { InstallationComponent } from './getting-started/installation/installation.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UpgradeGuideComponent,
    ContributionGuideComponent,
    SummaryComponent,
    InstallationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
