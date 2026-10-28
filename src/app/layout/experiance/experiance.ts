import { Component } from '@angular/core';

interface ExperienceSection {
  role: string;
  company: string;
  duration: string;
  description: string;
  bullets: string[];
  tags: string[];
  isActive: boolean;
}

@Component({
  selector: 'app-experiance',
  imports: [],
  templateUrl: './experiance.html',
  styleUrl: './experiance.scss',
})
export class Experiance {
  experiences: ExperienceSection[] = [
    {
      role: 'Associate Software Engineer',
      company: 'Bharuwa Solutions Pvt Ltd',
      duration: 'Aug 2024 — Present',
      description: 'Build and maintain enterprise web applications across Angular frontends and ASP.NET Core backends.',
      bullets: [
        'Developed and maintained responsive enterprise web applications using Angular and ASP.NET Core.',
        'Built secure REST APIs with JWT authentication and role-based authorization (RBAC).',
        'Optimized MongoDB queries and aggregation pipelines using proper indexing to improve API response times.',
        'Collaborated with cross-functional teams in Agile/Scrum ceremonies, code reviews, and sprint planning.'
      ],
      tags: ['Angular', 'ASP.NET Core', 'MongoDB', 'JWT', 'RBAC', 'Agile/Scrum'],
      isActive: true
    },
    {
      role: 'Engineer Intern',
      company: 'Bharuwa Solutions Pvt Ltd',
      duration: 'Nov 2023 — Jul 2024',
      description: 'Contributed to frontend and backend development for enterprise web applications.',
      bullets: [
        'Developed dynamic forms with reactive validation and modular, reusable PrimeNG components.',
        'Streamlined backend database operations and integrated frontend services with REST API endpoints.',
        'Improved client-side data rendering through modularized state-management logic.'
      ],
      tags: ['Angular', 'PrimeNG', 'REST APIs', 'TypeScript'],
      isActive: false
    }
  ];
}
