import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  notification: any = {
    visible: false,
    content: ''
  }

  ngOnInit(): void {
  }
  resetNoti() {
    this.notification = {
      visible: false,
      content: ''
    }
  }
  hanlderLogin(loginForm: any) {
    const data = loginForm.form.value;
    this.authService.login(data).subscribe(response => {
      localStorage.setItem('user', JSON.stringify(response))
      this.router.navigateByUrl('/')
    }, error => {
      this.notification = {
        visible: true,
        content: error.error || 'Đăng nhập không thành công!'
      }
    })
  }

}
