import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {AuthenticateService} from '../../services/authenticate.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error: boolean= false;

  constructor(private fb: FormBuilder,
    private authenticateService: AuthenticateService,
    private router: Router
    ) { }
 loginForm: FormGroup;
  ngOnInit(): void {
   this.loginForm=this.fb.group({
     userName: ['', Validators.required],
     password: ['', Validators.required]
   })
  }

  login(){
   const authention= this.authenticateService.authenticate(this.loginForm.value);
   this.error= false;
   console.log("login", this.loginForm.value, authention);

   if(authention) this.router.navigate(['/employees'])
   else this.error= true;
  }
}
