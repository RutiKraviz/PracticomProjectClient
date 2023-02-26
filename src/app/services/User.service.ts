import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import Child from 'src/models/Child';
import User from 'src/models/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  routeUrl = `${environment.baseUrl}`;
  arrChildren: Child[] = []
  myUser: User = new User("","","", new Date(),1,1,this.arrChildren);
  myChild:Child = new Child("", "", new Date())

  // userBasic = this.fb.group({
  //   id: ['', Validators.required],
  //   firstName: ['', Validators.required],
  //   lastName: ['', Validators.required],
  //   birthDate: [new Date(), Validators.required],
  //   gender:[1, Validators.required],
  //   hmo:[1, Validators.required],
  //   children:this.fb.array([])
  // })

  constructor(public http: HttpClient
    // , public fb: FormBuilder
    ) {

  }

  addUser(u: User) {
    console.log("befor server",u)
    return this.http.post<User>(`${this.routeUrl}/User`, u).subscribe(succ =>
      console.log("user add Successfully", succ));
  }
  // addChild(c: Child) {
  //   return this.http.post<Child>(`${this.routeUrl}/Child`, c);
  // }
}