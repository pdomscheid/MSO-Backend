import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { SAIDComponent } from './components/said/said.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { MedInfosComponent } from './components/med-infos/med-infos.component';
import { PrivateInfosComponent } from './components/private-infos/private-infos.component';
import { PersoenlicheInfosComponent } from './components/persoenliche-infos/persoenliche-infos.component';

const appRoutes: Routes = [
  { path: '',
    component: LoginComponent },
  { path: 'said/:id',
    component: SAIDComponent,
  },
  { path: 'medInfos/:id',
    component: MedInfosComponent,
  },
  { path: 'privateInfos/:id',
    component: PrivateInfosComponent,
  },
  { path: 'persoenlicheInfos/:id',
    component: PersoenlicheInfosComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SAIDComponent,
    NavigationComponent,
    MedInfosComponent,
    PrivateInfosComponent,
    PersoenlicheInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      appRoutes,
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
