# ionic2firebase
### Exemplo em Ionic v2 com integrações com o Firebase (Google)

### Passos para execução do projeto
1 - instalar dependências
     `npm install`
     
### Passos para execução do projeto (NOVO)
1 -  Configurações do firebase em package.json /app/app.module.ts

1.1 `"angularfire2": "^2.0.0-beta.5", 
       "firebase": "^3.6.0",
       "@types/jasmine": "^2.5.36"`

    rodar novamente o  `npm install`

1.2 - app.module
```javascript
//import
import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

//bloco inicial
export const firebaseConfig = {
    apiKey: "AIzaSyDkV6aNHfmFQ4Z5MX3tWOZkOMZLP0q25w0",
    authDomain: "exemploionic-9d93a.firebaseapp.com",
    databaseURL: "https://exemploionic-9d93a.firebaseio.com",
    storageBucket: "exemploionic-9d93a.appspot.com",
    messagingSenderId: "671269835445"
};

const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
}

//imports
imports: [
    IonicModule.forRoot(ConferenceApp, {
      backButtonText: 'Voltar'
    }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
````

## Telas
**1 - Login**
**1.1 - Criação usuário: **
![alt text](https://github.com/andersonsv/ionic2firebase/blob/master/screenshots/1-criacao%20usuario.png?raw=true)

**1.1 - Criação usuário: **

**1.1 - Criação usuário: **

### Referências

>[AngularFire2](https://github.com/angular/angularfire2)
>[Ionic Conference Example](https://github.com/driftyco/ionic-conference-app)
>[Firebase Docs](https://firebase.google.com/docs/)
