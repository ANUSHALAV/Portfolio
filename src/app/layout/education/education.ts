import { Component } from '@angular/core';

interface EducationSection {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  highlights?: string[];
}

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.html',
  styleUrl: './education.scss',
})
export class Education {
  educationList: EducationSection[] = [
    {
      degree: 'Master of Computer Application',
      institution: 'Chadigrah Univercity',
      duration: '2024 — 2026',
      description: 'Advanced study focusing on full-stack application development architectures, software engineering practices, and cloud technologies.',
      highlights: ['Full-Stack Web Dev', 'Software Quality Assurance', 'Cloud Computing Architecture']
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Swami Purnanand Degree College',
      duration: '2020 — 2023',
      description: 'Built a foundational core in database management systems, procedural & object-oriented programming, and web utility development.',
      highlights: ['Core Java / JS', 'Database Management (DBMS)', 'Data Flow & Logic Design']
    }
  ];
}
