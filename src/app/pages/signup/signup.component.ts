import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  notification: any = {
    visible: false,
    content: ''
  }
  resetNoti() {
    this.notification = {
      visible: false,
      content: ''
    }
  }
  handleRegister(registerForm: any) {
    const data = registerForm.form.value;
    console.log('data', data);

    if (data.password !== data.confirmPassword) {
      console.log('visible');

      this.notification = {
        visible: true,
        content: '2 mật khẩu phải giống nhau'
      }
      return
    }

    this.authService.signup(data).subscribe(response => {
      localStorage.setItem('users', response)
      this.router.navigateByUrl('/')
    }, error => {
      console.log(1111, error);
      this.notification = {
        visible: true,
        content: error.error || 'Có lỗi xảy ra'
      }
    })

  }

}
