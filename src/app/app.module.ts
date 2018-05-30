import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { EventAttendancePage } from '../pages/event-attendance/event-attendance';
import { EventDetailPage } from '../pages/event-detail/event-detail';
import { EventsPage } from '../pages/events/events';
import { PublicEventsPage } from '../pages/public-events/public-events';
import { SigninUpPage } from '../pages/signin-up/signin-up';
import { SettingsPage } from '../pages/settings/settings';
import { EditEventPage } from '../pages/edit-event/edit-event';
import { EventProvider } from '../providers/event/event';

import { HttpClientModule } from '@angular/common/http'

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { EventTabsPage } from '../pages/event-tabs/event-tabs';
import { EventNewsPage } from '../pages/event-news/event-news';
import { EventBlogPage } from '../pages/event-blog/event-blog';
import { EventPollsPage } from '../pages/event-polls/event-polls';
import { RootPageProvider } from '../providers/root-page/root-page';
import { SelectedEventProvider } from '../providers/selected-event/selected-event';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import { JoinEventsPage } from '../pages/join-events/join-events';
import { SearchEventsPage } from '../pages/search-events/search-events';
import { SearchEventDetailPage } from '../pages/search-event-detail/search-event-detail';
import { QrJoinEventPage } from '../pages/qr-join-event/qr-join-event';

export const firebaseConfig = {
    apiKey: "AIzaSyCIbx9StXPYu0Dohg3VadKgONnV5vCqKqY",
    authDomain: "qrme-65e1e.firebaseapp.com",
    databaseURL: "https://qrme-65e1e.firebaseio.com",
    projectId: "qrme-65e1e",
    storageBucket: "qrme-65e1e.appspot.com",
    messagingSenderId: "734199081398"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventAttendancePage,
    EventDetailPage,
    EventsPage,
    PublicEventsPage,
    SigninUpPage,
    SettingsPage,
    EditEventPage,
    EventTabsPage,
    EventNewsPage,
    EventAttendancePage,
    EventBlogPage,
    EventPollsPage,
    JoinEventsPage,
    SearchEventsPage,
    SearchEventDetailPage,
    QrJoinEventPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig, 'qrME'),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    EventAttendancePage,
    EventDetailPage,
    EventsPage,
    PublicEventsPage,
    SigninUpPage,
    SettingsPage,
    EditEventPage,
    EventTabsPage,
    EventNewsPage,
    EventAttendancePage,
    EventBlogPage,
    EventPollsPage,
    JoinEventsPage,
    SearchEventsPage,
    SearchEventDetailPage,
    QrJoinEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EventProvider,
    RootPageProvider,
    SelectedEventProvider,
    AuthProvider,
    UserProvider
  ]
})
export class AppModule {}