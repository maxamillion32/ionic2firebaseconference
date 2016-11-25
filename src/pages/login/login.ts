import { Component } from '@angular/core';

import { NavController, AlertController, LoadingController } from 'ionic-angular';

import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';
import { LoginProvider } from '../../providers/login-provider';
import { LoginModel } from '../../model/login-model';
@Component({
  selector    : 'page-user',
  templateUrl : 'login.html'
})
export class LoginPage {
  login       : {username?: string, password?: string} = {};
  submitted   = false;
  loading     : any;

  constructor(public navCtrl        : NavController, 
              public userData       : UserData,
              public loginProvider  : LoginProvider,
              public loadingCtrl    : LoadingController,
              public alertCtrl      : AlertController) { }

  onLogin(form) {
    this.submitted = true;

    this.loading = this.loadingCtrl.create({
      content: 'Aguarde...'
    });

    if (form.valid) {
        this.loading.present();

        var loginModel = new LoginModel();
        loginModel.setEmail(this.login.username);
        loginModel.setSenha(this.login.password);

        this.loginProvider.login(loginModel)
          .then((authData) => {
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
    }
  }

  onSignup() {
    this.navCtrl.push(SignupPage);
  }
}
