import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders} from 'angularfire2';
import { LoginModel } from './../model/login-model';
@Injectable()
export class LoginProvider {

  constructor(private af : AngularFire) {
    
  }

  login(loginModel : LoginModel) : firebase.Promise<any> {
    return this.af.auth.login( { email: loginModel.getEmail(), 
                                 password: loginModel.getSenha() }, 
                               { provider: AuthProviders.Password,
                                 method: AuthMethods.Password}
    );
  }

  signup(loginModel : LoginModel) : firebase.Promise<any> {
    return this.af.auth.createUser({  email   : loginModel.email, 
                                      password: loginModel.senha }); 
  }
}
