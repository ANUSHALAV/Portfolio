import { Component } from '@angular/core';

interface ProjectSection {
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  architecture: { label: string; value: string }[];
  frontendLink?: string;
  backendLink?: string;
}

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.scss',
})
export class Project {
  projects: ProjectSection[] = [
    {
      title: 'URL Shortener',
      description: 'A full-stack application that turns long URLs into short, shareable links.',
      features: [
        'Built RESTful APIs with ASP.NET Core and Entity Framework Core to manage URL records in MySQL.',
        'Created a responsive Angular interface for submitting original URLs and viewing generated short links.',
      ],
      technologies: ['Angular', 'ASP.NET Core Web API', 'Entity Framework Core', 'MySQL'],
      architecture: [
        { label: 'Frontend', value: 'Angular' },
        { label: 'Backend API', value: 'ASP.NET Core' },
        { label: 'Database', value: 'MySQL' },
      ],
    },
  ];
}
