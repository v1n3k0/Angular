import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsComArrayComponent } from './obs-com-array.component';

describe('ObsComArrayComponent', () => {
  let component: ObsComArrayComponent;
  let fixture: ComponentFixture<ObsComArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObsComArrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObsComArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
