import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateblocComponent } from './updatebloc.component';

describe('UpdateblocComponent', () => {
  let component: UpdateblocComponent;
  let fixture: ComponentFixture<UpdateblocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateblocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateblocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
