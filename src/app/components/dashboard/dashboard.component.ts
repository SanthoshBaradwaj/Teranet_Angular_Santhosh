import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SignUp } from '../../model/sign-up';
import { Login } from '../../model/login';
import { SignUpService } from '../../services/sign-up.service';
import { LoginService } from '../../services/login.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title: string;
  logoUrl: string;
  userEmail: string;
  userObj: SignUp;
  userLoginObj: Login;
  isLoggedOut: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private signService: SignUpService, private loginService: LoginService) {


  }

  ngOnInit() {
    this.title = "Teranet Internet Service Provider";
    this.logoUrl = "/assets/images/logoUrl.png";

    this.activatedRoute.params.subscribe(
      (data) => {
        this.userEmail = data['email'];

        this.signService.retrieveData(this.userEmail).subscribe(
          (data) => {
            this.userObj = data;
          }
        );

        this.loginService.getLoggedUser(this.userEmail).subscribe(
          (data) => {
            if (data.emailId) {
              this.userLoginObj = data;
            }
            
          }
        );
      }
    );





  }




  doDelete() {
    var a = confirm("Do you want to logout ?");

    if (a) {
      this.loginService.deleteUser(this.userObj.emailId).subscribe(
        (resp) => {
          if (resp.ok) {
            alert("Successfully Logged out")
            this.isLoggedOut = true;
          }
        },
        (error) => {
          alert("Error during logging out ! ")
        }
      );
      this.router.navigateByUrl("/")

    }
  }

}
