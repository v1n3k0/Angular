import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-decimal',
  templateUrl: './pipe-decimal.component.html',
  styleUrl: './pipe-decimal.component.scss'
})
export class PipeDecimalComponent implements OnInit {
  ngOnInit(): void {
    const valor = 1234.5678;
    console.log('Valor original:', valor);
  }

}
