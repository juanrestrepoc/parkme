import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DummyComponent } from './components/dummy/dummy.component';


const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'dummy', component: DummyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DummyComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
