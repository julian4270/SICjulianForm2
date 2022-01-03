import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username= ''
  pass= ''
  invalidcredentials = 'The user or pass are invalid!'
  invalidLogin = false
  constructor(private router:Router, private harcodedAuthenticationService:HardcodedAuthenticationService) { }
  ngOnInit(): void {
  }
  Send_login(){
      if(this.harcodedAuthenticationService.authenticate(this.username, this.pass)){
      this.router.navigate(['welcome',this.username])
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }
  }
}