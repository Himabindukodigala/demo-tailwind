import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
   cards = [
    {
      title: 'Task Management',
      desc: 'Organize and track your tasks efficiently'
    },
    {
      title: 'Team Collaboration',
      desc: 'Work together with your team in real time'
    },
    {
      title: 'Analytics',
      desc: 'Get insights into your productivity'
    }
  ];
}
