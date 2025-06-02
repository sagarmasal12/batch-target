import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoNotFoundComponent } from './compo-not-found.component';

describe('CompoNotFoundComponent', () => {
  let component: CompoNotFoundComponent;
  let fixture: ComponentFixture<CompoNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoNotFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
