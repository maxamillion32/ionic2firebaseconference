import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable, AuthMethods, AuthProviders} from 'angularfire2';
import { LoginModel } from './../model/login';
@Injectable()
export class LoginProvider {

  constructor(private af : AngularFire) {
    
  }

  login(email : string, senha : string) : any {
    return this.af.auth.login({ email: email, password: senha }, {
        provider: AuthProviders.Password,
        method: AuthMethods.Password
    });
  }

  signup(email : string, senha : string) : any {
    return this.af.auth.createUser({ email: email, password: senha }); 
  }
}
