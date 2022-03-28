import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }
  
  login(username: string, password: string){
    return from(signInWithEmailAndPassword(this.auth,username,password));
  }

  
  signUp(name:string, email:string, password:string){
    return from(createUserWithEmailAndPassword(this.auth, email,password)).pipe(
      switchMap(
        ({user}) => updateProfile(user, {displayName: name})
        )
    )
  }
  

  logout(){
    return from(this.auth.signOut());
  }
  
}
