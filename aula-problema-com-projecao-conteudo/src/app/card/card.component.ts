import { AfterContentInit, Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit {
  condition: boolean = true;

  @ContentChild('meuTemplate') content!: TemplateRef<any>;

  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.content);
  }
  ngOnInit(): void {
    console.log('OnInit', this.content);
  }
}
