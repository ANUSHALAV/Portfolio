import { Component } from '@angular/core';

interface EducationSection {
  degree: string;
  institution: string;
  duration: string;
  description?: string;
  highlights?: string[];
  grade: string;
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
      degree: 'Master of Computer Applications',
      institution: 'Chandigarh University, Mohali, India',
      duration: '2024 — 2026',
      description: 'Advanced study focusing on full-stack application development architectures, software engineering practices, and cloud technologies.',
      highlights: ['DSA', 'System Design', 'Full-Stack Web Dev', 'Software Quality Assurance', 'Cloud Computing Architecture'],
      grade: '8.35 CGPA'
    },
    {
      degree: 'Bachelor of Science in Information Technology',
      institution: 'Sri Dev Suman University, Uttarakhand, India',
      duration: '2020 — 2023',
      description: 'Built a foundational core in database management, web development, and software engineering.',
      highlights: ['HTML', 'CSS', 'JS', 'Bootstrap', 'Core Java', 'DBMS', 'Software Engineering Principles', 'Version Control'],
      grade: '70%'
    },
    {
      degree: 'Intermediate',
      institution: 'SVM Inter College, Dhalwala, Uttarakhand, India',
      duration: '2019 — 2020',
      description: '',
      highlights: ['Physics', 'Chemistry', 'Biology', 'Hindi', 'English'],
      grade: '68%'
    },
    {
      degree: 'Matriculation',
      institution: 'SVM Inter College, Dhalwala, Uttarakhand, India',
      duration: '2017 — 2018',
      description: '',
      highlights: ['Math', 'History', 'Sanskrit', 'Hindi', 'English', 'Science'],
      grade: "63%"
    }
  ];
}
