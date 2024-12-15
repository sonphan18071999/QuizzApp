import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MultipleQuestionChoiceComponent } from './multiple-question-choice.component';

describe('MultipleQuestionChoiceComponent', () => {
  let component: MultipleQuestionChoiceComponent;
  let fixture: ComponentFixture<MultipleQuestionChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MultipleQuestionChoiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MultipleQuestionChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
