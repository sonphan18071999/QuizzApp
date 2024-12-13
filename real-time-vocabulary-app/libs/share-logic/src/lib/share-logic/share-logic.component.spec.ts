import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareLogicComponent } from './share-logic.component';

describe('ShareLogicComponent', () => {
  let component: ShareLogicComponent;
  let fixture: ComponentFixture<ShareLogicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareLogicComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShareLogicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
