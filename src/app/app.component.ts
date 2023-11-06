import { Component } from '@angular/core';
import {  } from "@capacitor/status-bar";
// import { SplashScreen } from "@capacitor/splash-screen";
// const { SplashScreen, StatusBar } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    // this.initializeApp();
  }
  // async initializeApp() {
  //   SplashScreen.hide().catch((err) => {
  //     console.warn(err);
  //   });
  //   StatusBar.setBackgroundColor({ color: "#2dd36f" }).catch((err) => {
  //     console.warn(err);
  //   });
  // }
}