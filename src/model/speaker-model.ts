export class LoginModel {
    about       : string;  
    email       : string;
    location    : string;
    name        : string;
    phone       : string;
    profilePic  : string;
    twitter     : string;
    
    constructor()  {}

    setAbout(value : string) {
        this.about = value;
    } 

    getAbout() {
        return this.about;
    }

    setEmail(value : string) {
        this.email = value;
    } 

    getEmail() {
        return this.email;
    }

    setLocation(value : string) {
        this.location = value;
    } 

    getLocation() {
        return this.location;
    }

    setName(value : string) {
        this.name = value;
    } 

    getName() {
        return this.name;
    }

    setPhone(value : string) {
        this.phone = value;
    } 

    getPhone() {
        return this.phone;
    }

    setProfilePic(value : string) {
        this.profilePic = value;
    } 

    getProfilePic() {
        return this.profilePic;
    }

   setTwitter(value : string) {
        this.twitter = value;
    } 

    getTwitter() {
        return this.twitter;
    }
    
}  