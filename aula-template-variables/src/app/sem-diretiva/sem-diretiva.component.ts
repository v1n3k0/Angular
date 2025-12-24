import { Component } from '@angular/core';

@Component({
  selector: 'app-sem-diretiva',
  templateUrl: './sem-diretiva.component.html',
  styleUrl: './sem-diretiva.component.scss'
})
export class SemDiretivaComponent {
  addBackgrondColor: boolean = false;
  onMouseOver() {
    this.addBackgrondColor = true;
  }

  onMouseOut() {
    this.addBackgrondColor = false;
  }
}
