import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  usersservice: any;
  usersForm: any;

  constructor(private router: Router){}
  navigateToHome(){
    this.router.navigate(['/home'])
    
  }
  navigateToAbout(){
    this.router.navigate(['/about'])
    
  }

  Contact(){
    this.router.navigate(['contact us'])
  }

  
  
}
