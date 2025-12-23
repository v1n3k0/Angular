import { Component, ViewChild } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild(FilhoComponent) filhoCompRef!: FilhoComponent;

  hello() {
    this.filhoCompRef.dizerOi();
    this.filhoCompRef.message = 'Mensagem alterada pelo Pai!';
  }
}
