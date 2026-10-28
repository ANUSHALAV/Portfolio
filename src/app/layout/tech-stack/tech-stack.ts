import { Component } from '@angular/core';

interface SkillGroup {
  title: string;
  icon: string;
  skills: string[];
}

@Component({
  selector: 'app-tech-stack',
  imports: [],
  templateUrl: './tech-stack.html',
  styleUrl: './tech-stack.scss',
})
export class TechStack {
  skillGroups: SkillGroup[] = [
    {
      title: 'Languages',
      icon: 'fa-code',
      skills: ['C#', 'TypeScript', 'JavaScript', 'SQL'],
    },
    {
      title: 'Frontend',
      icon: 'fa-laptop-code',
      skills: ['HTML5', 'CSS3', 'Bootstrap', 'Tailwind', 'Angular', 'PrimeNG'],
    },
    {
      title: 'Backend & Database',
      icon: 'fa-server',
      skills: ['ASP.NET Core', 'Entity Framework Core', 'RESTful Web APIs', 'MongoDB', 'MySQL'],
    },
    {
      title: 'Tools',
      icon: 'fa-screwdriver-wrench',
      skills: ['Git', 'GitHub', 'Docker', 'Visual Studio', 'VS Code', 'Jira', 'Postman', 'Claude', 'ChatGPT'],
    },
    {
      title: 'Core Concepts',
      icon: 'fa-layer-group',
      skills: ['OOP', 'Clean Architecture', 'Dependency Injection', 'LINQ', 'JWT Authentication', 'Agile/Scrum'],
    },
  ];
}
