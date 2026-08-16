import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {

  projects: any[] = [
    {
      title: 'Clinic Management System',
      description: 'A comprehensive solution for managing clinic operations, including patient records, appointments, and billing.',
      tag: 'Asp.Net Core, MongoDB, Authentication',
      projectLink: 'https://github.com/ANUSHALAV/Clinic_Management_System'
    },
    {
      title: 'URL Shortener',
      description: 'A simple and efficient URL shortening service.',
      tag: 'Angular, TypeScript',
      projectLink: 'https://github.com/ANUSHALAV/URL-Shortener'
    }
  ];
}
