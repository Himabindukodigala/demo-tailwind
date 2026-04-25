import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
 name = '';
  email = '';
  password = '';
  message = '';

  constructor(private router: Router) {}

  register() {
    if (!this.name || !this.email || !this.password) {
      this.message = 'Please fill all fields';
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    if (users.find((u: any) => u.email === this.email)) {
      this.message = 'Email already exists';
      return;
    }
    
    users.push({ name: this.name, email: this.email, password: this.password });
    localStorage.setItem('users', JSON.stringify(users));
    this.router.navigate(['/login']);
  }
}