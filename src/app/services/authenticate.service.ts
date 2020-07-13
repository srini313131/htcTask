import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor() { }
  users: any[]=[
    { userName: 'user1', password:'password1'   },
    { userName: 'user2', password:'password2'   },
    { userName: 'user3', password:'password3'   }


  ];

  authenticate(userInput: any){
 const user=   this.users.find(item=> item.userName=== userInput.userName);
 if(user){
   if(user.password === userInput.password) return true;
   else return false
 }else return false

  }
}
