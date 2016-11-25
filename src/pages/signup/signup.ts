import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
import { LoginProvider } from '../../providers/login-provider';

@Component({
  selector    : 'page-user',
  templateUrl : 'signup.html'
})
export class SignupPage {
  signup      : {username?: string, password?: string} = {};
  submitted   = false;
  loading     : any;

  constructor(public navCtrl        : NavController, 
              public userData       : UserData,
              public loginProvider  : LoginProvider,
              public alertCtrl      : AlertController,
              public loadingCtrl    : LoadingController) {}

  onSignup(form) {
    this.submitted = true;

    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    if (form.valid) {
      this.loginProvider.signup(this.signup.username, this.signup.password).then((authData) => {
            this.userData.login(authData.uid);
            this.loading.dismiss();
            this.navCtrl.push(TabsPage);
          }).catch((error) => {
            this.loading.dismiss();
            let alert = this.alertCtrl.create({
              message: error.message,
              buttons: [
              {
                text: 'OK',
                handler: () => {
                  this.loading.dismiss();
                }
              }
            ]
          });
          alert.present();
        });
      this.navCtrl.push(TabsPage);
    }
  }
}
