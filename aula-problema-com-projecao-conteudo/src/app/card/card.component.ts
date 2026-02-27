import { AfterContentInit, Component, ContentChild, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, AfterContentInit {
  ngAfterContentInit(): void {
    console.log('AfterContentInit', this.content);
  }
  ngOnInit(): void {
    console.log('OnInit', this.content);
  }
  @ContentChild('meuTemplate') content!: TemplateRef<any>;
}
