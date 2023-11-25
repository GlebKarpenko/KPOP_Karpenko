import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowSelectedComponent } from './show-selected.component';

describe('ShowSelectedComponent', () => {
  let component: ShowSelectedComponent;
  let fixture: ComponentFixture<ShowSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowSelectedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
