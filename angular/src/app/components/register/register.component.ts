
import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName: String;
  lastName: String;
  email: String;
  password: String;

  constructor(
    private validateService: ValidateService,
   private authService: AuthService,
   private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
    
  }

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      email: this.email,
      lastName: this.lastName,
      password: this.password
    }

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {cssClass: 'alert-danger', timeout: 3000});
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
   this.flashMessage.show('Please use a valid email', {cssClass: 'alert-danger', timeout: 3000});
   console.log("Please use a valid email");
   return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe(data => {
      if(data.success) { 
        this.flashMessage.show('Verify Email To Login', {cssClass: 'alert-success myclass', timeout: 3000});
      } else {
        this.flashMessage.show('Email Already Exists', {cssClass: 'alert-danger myclass', timeout: 3000});
        this.router.navigate(['/register']);
      }
    });
    }
  }
