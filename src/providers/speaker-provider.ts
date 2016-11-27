import { Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
@Injectable()
export class SpeakerProvider {

  constructor(public af : AngularFire) {
  }

  listar(){
      var speakerList:  FirebaseListObservable<any[]>;
     
      speakerList = this.af.database.list('/speakers', {
          query: {
              orderByChild: 'name'
          }
      });
    
      return speakerList;
    }

}
