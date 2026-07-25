import { Component } from '@angular/core';

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
      description: 'A comprehensive solution for managing clinic operations, including patient records, appointments, and billing.'
    }
  ];
}
