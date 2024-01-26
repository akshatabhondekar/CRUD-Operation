import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  usersForm: FormGroup;
  usersData: any;
   name:string;
  // users:any

  constructor(
    private router: Router,
    private usersservice: UsersService,
    private fb: FormBuilder

  ) {

  }

  ngOnInit() {
    this.name="prashant"
    this.usersForm = this.fb.group({
      First_name: ['', Validators.required],
      Last_name: ['', Validators.required],
      Email_address: ['', Validators.required]
    })
    // this.usersservice.Users().subscribe((res:any)=>{
    //   console.log(res);
    //   this.usersData=res.products
    //   console.log(this.usersData)
    //  })
  
  }

  SignIn() {
   this.name="nitin"
    console.log(this.usersForm.value);
    this.usersservice.addUsers(this.usersForm.value).subscribe((res: any) => {
console.log(res);

    })
   //console.log(this.users);
 
  }

}
