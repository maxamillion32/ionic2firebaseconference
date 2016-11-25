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
    //fim configuração firebase`

imports: [
    IonicModule.forRoot(ConferenceApp, {
      backButtonText: 'Voltar'
    }),
    AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
  ],
