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
import { RequestLifecycleComponent } from './concept/request-lifecycle/request-lifecycle.component';
import { IocContainerComponent } from './concept/ioc-container/ioc-container.component';
import { ServiceProvidersComponent } from './concept/service-providers/service-providers.component';
import { IgnitorComponent } from './concept/ignitor/ignitor.component';
import { SecurityIntroductionComponent } from './security/security-introduction/security-introduction.component';
import { AuthenticationComponent } from './security/authentication/authentication.component';
import { CorsComponent } from './security/cors/cors.component';
import { CsrfComponent } from './security/csrf/csrf.component';
import { EncryptionAndHashingComponent } from './security/encryption-and-hashing/encryption-and-hashing.component';
import { ShieldComponent } from './security/shield/shield.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    UpgradeGuideComponent,
    ContributionGuideComponent,
    SummaryComponent,
    InstallationComponent,
    RequestLifecycleComponent,
    IocContainerComponent,
    ServiceProvidersComponent,
    IgnitorComponent,
    SecurityIntroductionComponent,
    AuthenticationComponent,
    CorsComponent,
    CsrfComponent,
    EncryptionAndHashingComponent,
    ShieldComponent
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
