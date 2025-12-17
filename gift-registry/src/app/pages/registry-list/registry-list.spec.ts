import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryList } from './registry-list';

describe('RegistryList', () => {
  let component: RegistryList;
  let fixture: ComponentFixture<RegistryList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
