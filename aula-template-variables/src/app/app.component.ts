import { AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FilhoComponent } from './filho/filho.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  buttonList = [
    'Botão 1',
    'Botão 2',
    'Botão 3'
  ]

  @ViewChildren('meuButton')
  buttonsEl!: QueryList<ElementRef<HTMLButtonElement>>;

  ngAfterViewInit(): void {
    console.log(this.buttonsEl);

    this.buttonsEl.changes.subscribe( (result) => {
      console.log('Mudou a lista de botões');
      console.log(result);
    });
  }

  changeColor(event: Event) {
    console.log(event);

    const btnElement = event.target as HTMLButtonElement;
    btnElement.style.backgroundColor = 'red';
    btnElement.style.color = 'white';
  }

  resetButton() {
    this.buttonsEl.forEach((btn) => {
      btn.nativeElement.style.backgroundColor = '';
      btn.nativeElement.style.color = '';
    });
  }

  first() {
    // const firstBtn = this.buttonsEl.first;
    // firstBtn.nativeElement.style.backgroundColor = 'blue';
    // firstBtn.nativeElement.style.color = 'white';

    // const firstBtn = this.buttonsEl.find( (btnEl) => btnEl.nativeElement.className === 'btn-0' );
    // firstBtn!.nativeElement.style.backgroundColor = 'blue';
    // firstBtn!.nativeElement.style.color = 'white';

    const firstBtn = this.buttonsEl.toArray()[0];
    firstBtn.nativeElement.style.backgroundColor = 'blue';
    firstBtn.nativeElement.style.color = 'white';
  }

  remove() {
    this.buttonList.shift();
  }
}
