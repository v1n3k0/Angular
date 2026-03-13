import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-data',
  templateUrl: './pipe-data.component.html',
  styleUrl: './pipe-data.component.scss'
})
export class PipeDataComponent implements OnInit {
  minhaData: string = '2024-10-01T12:00:00Z';
  minhaDataObj: Date = new Date(this.minhaData);

  ngOnInit(): void {
    console.log('data convertida para regiao', new Date(this.minhaData));
    console.log('data UTC-0', new Date(this.minhaData).toUTCString());

    console.log('Timestamp', new Date(this.minhaData).getTime());
  }
}
