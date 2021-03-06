import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';

import { SqliteApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddDataPage } from '../pages/add-data/add-data';
import { EditDataPage } from '../pages/edit-data/edit-data';

@NgModule({
  declarations: [
    SqliteApp,
    HomePage,
    AddDataPage,
    EditDataPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(SqliteApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SqliteApp,
    HomePage,
    AddDataPage,
    EditDataPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    SQLite,
    Toast
  ]
})
export class AppModule {}
