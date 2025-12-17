import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryEdit } from './registry-edit';

describe('RegistryEdit', () => {
  let component: RegistryEdit;
  let fixture: ComponentFixture<RegistryEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryEdit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
