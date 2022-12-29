import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaballoDetailComponent } from './caballo-detail.component';

describe('CaballoDetailComponent', () => {
  let component: CaballoDetailComponent;
  let fixture: ComponentFixture<CaballoDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaballoDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaballoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
