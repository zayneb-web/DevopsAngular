import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowblocComponent } from './showbloc.component';

describe('ShowblocComponent', () => {
  let component: ShowblocComponent;
  let fixture: ComponentFixture<ShowblocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowblocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowblocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
