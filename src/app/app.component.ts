import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from './login/login.service';
import firebase from 'firebase/compat/app';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  providers: [
    
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private loginService: LoginService){}
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCiZbMhIyzhEuKsAXaLnfRQwvg6jKwFlLA",
      authDomain: "daniel-trujillo-ing.firebaseapp.com",
      databaseURL: "https://daniel-trujillo-ing-default-rtdb.firebaseio.com",
      projectId: "daniel-trujillo-ing",
      storageBucket: "daniel-trujillo-ing.firebasestorage.app",
      messagingSenderId: "234474060127",
      appId: "1:234474060127:web:9b125a8985b25ca6c45eea",
      measurementId: "G-N9LP3HVR87"
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logout();
  }
} 