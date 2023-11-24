import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgFormComponent } from './img-form.component';

describe('ImgFormComponent', () => {
  let component: ImgFormComponent;
  let fixture: ComponentFixture<ImgFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImgFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImgFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
