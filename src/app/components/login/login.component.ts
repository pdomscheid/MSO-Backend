import {AfterViewInit, Component, ElementRef} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {LoginService} from './login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements AfterViewInit {
  loginForm;
  validSAID;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private formBuilder: FormBuilder,
    private elementRef: ElementRef
  ) {
    this.loginForm = this.formBuilder.group({
      SAID: ''
    });
    this.validSAID = true;
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F0F2F1';
  }

  onSubmit(loginData) {
     this.loginService.getSAID(loginData.SAID)
       .subscribe((said: any) => {
         this.validSAID = true;
         this.router.navigate(['/said/' + loginData.SAID]);
       },
         error => {
         this.validSAID = false;
         });
     this.loginForm.reset();
  }

}
