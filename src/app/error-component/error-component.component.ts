import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error-component',
  standalone: true,
  imports: [],
  templateUrl: './error-component.component.html',
  styleUrl: './error-component.component.css'
})
export class ErrorComponentComponent {

  constructor(private router: Router) {}

  navigateHome(): void {
    this.router.navigate(['/']);
  }

}
