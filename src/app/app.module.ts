import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { DummyComponent } from './components/dummy/dummy.component';
import { HttpModule } from '@angular/http';

import { TimeModalComponent } from './components/time-modal/time-modal.component';
import { ParkingmeService } from './services/parkingme.service';

import { BootstrapModalModule } from 'ng2-bootstrap-modal';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'dummy', component: DummyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    DummyComponent,
    TimeModalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BootstrapModalModule,
    HttpModule
  ],
  entryComponents: [
    TimeModalComponent
  ],
  providers: [ ParkingmeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
