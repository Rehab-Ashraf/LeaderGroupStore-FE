import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditcategoriesComponent } from './add-editcategories.component';

describe('AddEditcategoriesComponent', () => {
  let component: AddEditcategoriesComponent;
  let fixture: ComponentFixture<AddEditcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
