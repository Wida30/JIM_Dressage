import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaballosComponent } from './caballos.component';

describe('CaballosComponent', () => {
  let component: CaballosComponent;
  let fixture: ComponentFixture<CaballosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaballosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CaballosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
