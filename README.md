# ionic2firebase
Exemplo em Ionic v2 com integrações com o Firebase (Google)

Passos para execução do projeto
1 - instalar dependências
     `npm install`

2 - Configurações do firebase em package.json /app/app.module.ts

2.1 - "angularfire2": "^2.0.0-beta.5",
      "firebase": "^3.6.0",
      "@types/jasmine": "^2.5.36"

    rodar novamente o  `npm install`

2.2 - app.module

import { AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';

    export const firebaseConfig = {
    apiKey: "AIzaSyDzxZ9QxegjPBstBmKkDAWiRLT-rEB0d-U",
        authDomain: "patatitas-1014f.firebaseapp.com",
        databaseURL: "https://patatitas-1014f.firebaseio.com",
        storageBucket: "patatitas-1014f.appspot.com",
        messagingSenderId: "966300156130"
    };

    const myFirebaseAuthConfig = {
    provider: AuthProviders.Password,
    method: AuthMethods.Password
    }
    //fim configuração firebase`

imports: [
    IonicModule.forRoot(ConferenceApp, {
      backButtonText: 'Voltar'
    }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
