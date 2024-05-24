import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { PersonsComponent } from './pages/persons/persons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { AuthConfig, OAuthModule, OAuthStorage } from 'angular-oauth2-oidc';
import { RouterOutlet } from '@angular/router';
import { HttpXSRFInterceptor } from './interceptors/http.csrf.interceptor';
import { Page1Component } from './pages/page1/page1.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { environment } from '../environments/environment';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:8080/realms/ILV',
  requireHttps: false,
  redirectUri: environment.frontendBaseUrl,
  postLogoutRedirectUri: environment.frontendBaseUrl,
  clientId: 'demoapp',
  scope: 'openid profile roles offline_access',
  responseType: 'code',
  showDebugInformation: true,
  requestAccessToken: true,
  silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
  silentRefreshTimeout: 500,
  clearHashAfterLogin: true,
};

export function storageFactory(): OAuthStorage {
  return sessionStorage;
}

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    Page1Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterOutlet,
    AppRoutingModule,
    HttpClientModule,
    OAuthModule.forRoot({ resourceServer: { sendAccessToken: true } }),
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [
    provideAnimationsAsync(),
    { provide: AuthConfig, useValue: authConfig },
    { provide: HTTP_INTERCEPTORS, useClass: HttpXSRFInterceptor, multi: true },
    { provide: OAuthStorage, useFactory: storageFactory },
    Location,
    { provide: LocationStrategy, useClass: PathLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
