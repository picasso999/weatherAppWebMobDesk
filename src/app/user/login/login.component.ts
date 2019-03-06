import { Component, OnInit } from '@angular/core';
import { AuthProvider } from 'ngx-auth-firebaseui';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  providers = AuthProvider;

  constructor(private router: Router,
              private afAuth: AngularFireAuth,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
  }

  success(content: any) {
      this.snackBar.open(`Welcome ${content.displayName}!`, 'OK', {
        duration: 5000
      });
      this.router.navigate(['/weather']);
    }

}
