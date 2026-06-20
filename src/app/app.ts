import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Navbar } from "./layout/navbar/navbar";
import { Hero } from "./layout/hero/hero";
import { About } from "./layout/about/about";
import { Education } from "./layout/education/education";
import { Contact } from "./layout/contact/contact";
import { Footer } from "./layout/footer/footer";
import { Project } from "./layout/project/project";
import { Experiance } from "./layout/experiance/experiance";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet,Navbar,Hero,About,Education,Contact,Footer,Project,Experiance]
})
export class App {
}