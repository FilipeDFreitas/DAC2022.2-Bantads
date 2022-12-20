import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAdmComponent } from './criar-adm.component';

describe('CriarAdmComponent', () => {
  let component: CriarAdmComponent;
  let fixture: ComponentFixture<CriarAdmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAdmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAdmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
