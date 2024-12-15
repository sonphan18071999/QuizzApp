import { ComponentFixture, TestBed } from '@angular/core/testing';
import { QuizNavigationActionButtonsComponent } from './quiz-navigation-action-buttons.component';

describe('QuizNavigationActionButtonsComponent', () => {
  let component: QuizNavigationActionButtonsComponent;
  let fixture: ComponentFixture<QuizNavigationActionButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizNavigationActionButtonsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(QuizNavigationActionButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
