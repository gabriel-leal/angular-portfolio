import { Component, signal } from '@angular/core';

// interface
import { iKnowledge } from '../../interface/iKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<iKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Ícone de conhecimento de html5',
      title: 'HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Ícone de conhecimento de css3',
      title: 'CSS3'
    },
    {
      src: 'assets/icons/knowledge/sass.svg',
      alt: 'Ícone de conhecimento de sass',
      title: 'SASS'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Ícone de conhecimento de javascript',
      title: 'JavaScript'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Ícone de conhecimento de angular',
      title: 'Angular'
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Ícone de conhecimento de python',
      title: 'Python'
    },
    // {
    //   src: 'assets/icons/knowledge/docker.svg',
    //   alt: 'Ícone de conhecimento de docker',
    //   title: 'docker'
    // },
  ])
}
