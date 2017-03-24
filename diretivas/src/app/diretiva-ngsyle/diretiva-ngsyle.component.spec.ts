/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiretivaNgsyleComponent } from './diretiva-ngsyle.component';

describe('DiretivaNgsyleComponent', () => {
  let component: DiretivaNgsyleComponent;
  let fixture: ComponentFixture<DiretivaNgsyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiretivaNgsyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgsyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
