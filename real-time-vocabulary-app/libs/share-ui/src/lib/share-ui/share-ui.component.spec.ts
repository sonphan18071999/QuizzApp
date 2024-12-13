import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShareUiComponent } from './share-ui.component';

describe('ShareUiComponent', () => {
  let component: ShareUiComponent;
  let fixture: ComponentFixture<ShareUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShareUiComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ShareUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
