import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDataFormComponent } from './pet-data-form.component';

describe('PetDataFormComponent', () => {
  let component: PetDataFormComponent;
  let fixture: ComponentFixture<PetDataFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetDataFormComponent]
    });
    fixture = TestBed.createComponent(PetDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
