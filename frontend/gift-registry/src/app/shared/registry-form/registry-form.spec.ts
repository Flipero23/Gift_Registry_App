import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryForm } from './registry-form';

describe('RegistryForm', () => {
  let component: RegistryForm;
  let fixture: ComponentFixture<RegistryForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
