import { Component, inject, signal } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { EDialogPainelClass } from '../../enum/EDialogPainelClass.enum';
import { Iprojects } from '../../interface/IProjects.interface';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog)

  public arrayprojects = signal<Iprojects[]>([
    {
      src: "assets/img/projects/android.png",
      alt: "site sobre o Android",
      title: "Android",
      width: "100px",
      height: "51px",
      description: "<p>Projeto criado no Curso em Video com HTML5 e CSS3</p>",
      links: [
        {
        name: "Android",
        site: "https://gabriel-leal.github.io/android/"
      }
    ]
    },
    {
      src: "assets/img/projects/cordelmoderno.png",
      alt: "site sobre o cordel de Milton Duarte",
      title: "Cordel Moderno",
      width: "100px",
      height: "51px",
      description: "<p>Projeto criado no Curso em Video com HTML5 e CSS3 usando o efeito parallax</p>",
      links: [
        {
        name: "Cordel Moderno",
        site: "https://gabriel-leal.github.io/cordelmoderno/"
      }
    ]
    },
    {
      src: "assets/img/projects/inscricaoevento.png",
      alt: "Página sobre a inscrição de um evento",
      title: "Inscrição Musical",
      width: "100px",
      height: "51px",
      description: "<p>Projeto criado por mim para minha igreja para a inscrição do musical</p>",
      links: [
        {
        name: "Inscrição Musical",
        site: "https://github.com/gabriel-leal/Inscricao-musical"
      }
    ]
    },
    {
      src: "assets/img/projects/login.png",
      alt: "projeto de tela de login",
      title: "Login",
      width: "100px",
      height: "51px",
      description: "<p>Projeto criado no Curso em Video com HTML5 e CSS3</p>",
      links: [
        {
        name: "login",
        site: "https://gabriel-leal.github.io/login/"
      }
    ]
    },
  ])

  public openDialog(data: Iprojects) {
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPainelClass.PROJECTS
    })
  }
}
