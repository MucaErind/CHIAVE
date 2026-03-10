import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { CommonModule } from '@angular/common';

@Component({
selector: 'app-root',
imports: [CommonModule,RouterOutlet, RouterLink, RouterLinkActive],
templateUrl: './app.html',
styleUrl: './app.css'
})
export class App {
constructor(public auth: AuthService) {}
}