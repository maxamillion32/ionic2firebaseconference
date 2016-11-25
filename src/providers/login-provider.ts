import { Injectable } from '@angular/core';
import { AngularFire, AuthMethods, AuthProviders} from 'angularfire2';
import { LoginModel } from './../model/login-model';
@Injectable()
export class LoginProvider {

  constructor(private af : AngularFire) {
    
  }

  login(loginModel : LoginModel) : any {
    return this.af.auth.login( { email: loginModel.getEmail(), 
                                 password: loginModel.getSenha() }, 
                               { provider: AuthProviders.Password,
                                 method: AuthMethods.Password}
    );
  }

  signup(email : string, senha : string) : any {
    return this.af.auth.createUser({ email: email, password: senha }); 
  }
}
