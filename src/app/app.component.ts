import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ConfigService } from './config.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  providers: [ConfigService]
})

export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private configSevice:ConfigService,
    private router:Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      let config = this.configSevice.getConfigData();
      console.log(config);
      if(config == null){
        console.log("nulo");
        this.router.navigateByUrl("");
        this.configSevice.setConfigData(false);
      }else{
        this.router.navigateByUrl("/tabs/tab1");
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
