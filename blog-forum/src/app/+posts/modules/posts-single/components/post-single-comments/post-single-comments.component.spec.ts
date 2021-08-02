import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSingleCommentsComponent } from './post-single-comments.component';

describe('PostSingleCommentsComponent', () => {
  let component: PostSingleCommentsComponent;
  let fixture: ComponentFixture<PostSingleCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostSingleCommentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostSingleCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
