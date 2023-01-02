import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalComponent } from './instal.component';

describe('InstalComponent', () => {
  let component: InstalComponent;
  let fixture: ComponentFixture<InstalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
