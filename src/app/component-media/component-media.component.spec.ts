import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentMediaComponent } from './component-media.component';

describe('ComponentMediaComponent', () => {
  let component: ComponentMediaComponent;
  let fixture: ComponentFixture<ComponentMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentMediaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
