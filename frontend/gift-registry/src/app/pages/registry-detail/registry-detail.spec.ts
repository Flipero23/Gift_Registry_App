import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistryDetail } from './registry-detail';

describe('RegistryDetail', () => {
  let component: RegistryDetail;
  let fixture: ComponentFixture<RegistryDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistryDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistryDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
