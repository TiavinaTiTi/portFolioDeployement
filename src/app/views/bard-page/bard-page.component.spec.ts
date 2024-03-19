import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardPageComponent } from './bard-page.component';

describe('BardPageComponent', () => {
  let component: BardPageComponent;
  let fixture: ComponentFixture<BardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BardPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
