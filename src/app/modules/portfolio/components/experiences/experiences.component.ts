import { Component, signal } from '@angular/core';

//interface
import { iExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<iExperiences[]>([
    {
      summary: {
        strong: "web designer",
        p: "DriLean | Jan 2024 - abr 2024"
      },
      text: "Foi um curto período em uma área que não gostei muito, por não ser a área que quero atuar, então resolvi sair e focar 100% nos meu estudos"
    }
  ])
}
