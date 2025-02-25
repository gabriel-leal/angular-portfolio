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
      text: "Foi um período curto em uma área que não me identifiquei, pois não era o segmento em que desejo atuar. Por isso, decidi sair e dedicar-me integralmente aos meus estudos."
    },
    {
      summary: {
        strong: "Suporte Técnico",
        p: "Softpool | FEV 2024 - Atual"
      },
      text: "Iniciei minha trajetória na área de programação como suporte técnico, realizando atualizações e correções no sistema, além da instalação e configuração do software, incluindo o banco de dados no SQL Server, executáveis no Windows e a parte web."
    }
  ])
}
