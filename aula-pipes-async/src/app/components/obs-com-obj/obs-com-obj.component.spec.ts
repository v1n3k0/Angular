import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObsComObjComponent } from './obs-com-obj.component';

describe('ObsComObjComponent', () => {
  let component: ObsComObjComponent;
  let fixture: ComponentFixture<ObsComObjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObsComObjComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObsComObjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
