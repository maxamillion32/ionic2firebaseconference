export class LoginModel {
    email     : string;  
    senha     : string;
    
    constructor()  {}

    setEmail(value : string) {
        this.email = value;
    } 

    getEmail() {
        return this.email;
    }

    setSenha(value : string) {
        this.senha = value;
    }

    getSenha() {
        return this.senha;
    }
}  