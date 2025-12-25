import { AfterViewInit, Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App implements OnInit, AfterViewInit {
  @ViewChild('minhaDiv') divRef!: ElementRef<HTMLDivElement>;

  constructor(private readonly _elref: ElementRef) { }

  ngOnInit(): void {
    console.log(this._elref);
    const minhaDiv = this._elref.nativeElement.querySelector('#minha-outra-div') as HTMLDivElement;

    minhaDiv.textContent = 'Conteúdo inserido via ElementRef no OnInit';
    minhaDiv.style.backgroundColor = 'lightgreen';
    minhaDiv.classList.add('minha-classe');

    minhaDiv.addEventListener('click', () => {
      alert('Div clicada!');
    });
    console.log(minhaDiv);
  }

  ngAfterViewInit(): void {
    this.divRef.nativeElement.style.backgroundColor = 'lightblue';
    this.divRef.nativeElement.textContent = 'Conteúdo inserido via ElementRef';
    this.divRef.nativeElement.classList.add('minha-classe');
  }
}