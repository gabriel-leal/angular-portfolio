import { Component, inject, signal } from '@angular/core';
import {MatDialog, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { Iprojects } from '../../interface/IProjects.interface';

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
      site: "https://gabriel-leal.github.io/android/"

    },
    {
      src: "assets/img/projects/cordelmoderno.png",
      alt: "site sobre o cordel de Milton Duarte",
      site: "https://gabriel-leal.github.io/cordelmoderno/"
    },
    {
      src: "assets/img/projects/inscricaoevento.png",
      alt: "Página sobre a inscrição de um evento",
      site: "https://github.com/gabriel-leal/Inscricao-musical"
    },
    {
      src: "assets/img/projects/login.png",
      alt: "projeto de tela de login",
      site: "https://gabriel-leal.github.io/login/"
    },
    {
      src: "assets/img/projects/lista-de-tarefas.png",
      alt: "projeto de tela de login",
      site: "https://github.com/gabriel-leal/angular-lista-de-tarefas"
    },
    {
      src: "assets/img/projects/qrcode.png",
      alt: "projeto acadêmico, gerador de Qr Code em python!",
      site: "https://menezesdigital.com.br/qrcode"
    },
    {
      src: "assets/img/projects/showalunos.png",
      alt: "projeto de apresentação musical com compra de ingresso",
      site: "https://showalunos.menezesdigital.com.br"
    },
        {
      src: "assets/img/projects/lojatenis.png",
      alt: "projeto de Loja de tênis",
      site: "https://github.com/gabriel-leal/loja-tenis"
    },
  ])

  public openSite(data: Iprojects) {
    window.open(data.site, '_blank');
  }
}
