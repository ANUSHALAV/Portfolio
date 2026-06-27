import { NgFor } from '@angular/common';
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
      role: 'Full Stack Developer',
      company: 'Bharuwa Solutions Pvt Ltd',
      duration: 'Aug 2024 — Present',
      description: 'Worked on end-to-end development of web applications — from designing responsive Angular UIs to building scalable RESTful APIs with ASP.NET Core and managing data with MongoDB.',
      bullets: [
        'Built and maintained dynamic, component-driven frontends using Angular, improving UI responsiveness and user experience',
        'Designed and developed RESTful APIs with ASP.NET Core (C#) to support core business features like authentication, CRUD operations, and role-based access',
        'Managed MongoDB collections and schemas for flexible, high-performance data storage',
        'Developed a full-featured CMS to manage and publish digital content with role-based workflows (admin, editor, viewer)',
        'Collaborated with cross-functional teams to gather requirements, review code, and deliver features on schedule'
      ],
      tags: ['Angular', 'ASP.NET Core', 'C#', 'MongoDB', 'REST APIs', 'TypeScript', 'Git'],
      isActive: true
    },
    {
      role: 'Trainee',
      company: 'Bharuwa Solutions Pvt Ltd',
      duration: 'Nov 2023 — July 2024',
      description: 'Started as a trainee gaining hands-on experience with enterprise web development, learning the full development lifecycle from requirement gathering to deployment.',
      bullets: [
        'Learned and applied Angular fundamentals to build responsive, component-driven UI modules',
        'Assisted in developing RESTful APIs using ASP.NET Core under senior developer guidance',
        'Gained practical experience with MongoDB data modelling and query optimization',
        'Participated in code reviews and agile sprint ceremonies to understand team workflows',
        'Worked on internal tooling and bug fixes to support production applications'
      ],
      tags: ['Angular', 'ASP.NET Core', 'C#', 'MongoDB', 'REST APIs', 'TypeScript', 'Git'],
      isActive: false
    },
    {
      role: 'Developer Intern',
      company: 'VervGen Tech Pvt Ltd',
      duration: 'Sep 2023 — Nov 2023',
      description: 'Completed a frontend-focused internship building responsive UI components and static web pages, developing a strong foundation in core web technologies.',
      bullets: [
        'Designed and developed responsive web pages using HTML, CSS, and JavaScript',
        'Used Bootstrap to build mobile-first layouts and reusable UI components',
        'Collaborated with the design team to convert Figma mockups into pixel-perfect HTML pages',
        'Managed source code and feature branches using Git and GitHub',
        'Delivered multiple small projects independently within tight deadlines'
      ],
      tags: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Git'],
      isActive: false
    }
  ];
}
