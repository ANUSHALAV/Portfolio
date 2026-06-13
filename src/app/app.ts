import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layout/navbar/navbar';
import { Hero } from './layout/hero/hero';
import { About } from './layout/about/about';
import { Education } from './layout/education/education';
import { Experiance } from './layout/experiance/experiance';
import { Project } from './layout/project/project';
import { Contact } from './layout/contact/contact';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, About, Education, Experiance, Project, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Portfolio');
}
