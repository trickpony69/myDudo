import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { ToDoProvider } from '../providers/to-do/to-do';
import { SettingsPage } from '../pages/settings/settings';
import { TabsPage } from '../pages/tabs/tabs';
import { ListPage } from '../pages/list/list';
import { HomeListe } from '../pages/home-liste/home-liste';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { IonicStorageModule } from '@ionic/storage';

export const firebaseConfig = {
  apiKey: "AIzaSyCJf4aqwkCNGixvmTKHm8NnnzksXmTnpE0",
  authDomain: "mydudo-27891.firebaseapp.com",
  databaseURL: "https://mydudo-27891.firebaseio.com",
  projectId: "mydudo-27891",
  storageBucket: "mydudo-27891.appspot.com",
  messagingSenderId: "33566013920"
};

@NgModule({
  declarations: [
    MyApp,
    HomeListe,
    SettingsPage,
    TabsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomeListe,
    SettingsPage,
    TabsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ToDoProvider,
  ]
})
export class AppModule { }
