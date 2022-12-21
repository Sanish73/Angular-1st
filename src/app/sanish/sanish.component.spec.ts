import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanishComponent } from './sanish.component';

describe('SanishComponent', () => {
  let component: SanishComponent;
  let fixture: ComponentFixture<SanishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanishComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
