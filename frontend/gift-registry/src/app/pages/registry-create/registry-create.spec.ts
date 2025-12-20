import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryCreate } from './registry-create';

describe('RegistryCreate', () => {
  let component: RegistryCreate;
  let fixture: ComponentFixture<RegistryCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
