import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizMapComponent } from './quiz-map.component';

describe('QuizMapComponent', () => {
  let component: QuizMapComponent;
  let fixture: ComponentFixture<QuizMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizMapComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
