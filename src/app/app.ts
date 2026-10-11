import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./layout/navbar/navbar";
import { Hero } from "./layout/hero/hero";
import { TechStack } from "./layout/tech-stack/tech-stack";
import { Experiance } from "./layout/experiance/experiance";
import { Project } from "./layout/project/project";
import { About } from "./layout/about/about";
import { Education } from "./layout/education/education";
import { Contact } from "./layout/contact/contact";
import { Footer } from "./layout/footer/footer";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, Navbar, Hero, TechStack, Experiance, Project, About, Education, Contact, Footer]
})
export class App {
}