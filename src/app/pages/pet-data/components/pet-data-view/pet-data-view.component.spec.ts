import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetDataViewComponent } from './pet-data-view.component';

describe('PetDataViewComponent', () => {
  let component: PetDataViewComponent;
  let fixture: ComponentFixture<PetDataViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetDataViewComponent]
    });
    fixture = TestBed.createComponent(PetDataViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
