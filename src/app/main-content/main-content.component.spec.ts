import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { MaincontentComponent } from './main-content.component'; 

describe('MaincontentComponent', () => {
  let component: MaincontentComponent;
  let fixture: ComponentFixture<MaincontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule], 
      declarations: [MaincontentComponent] 
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MaincontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
