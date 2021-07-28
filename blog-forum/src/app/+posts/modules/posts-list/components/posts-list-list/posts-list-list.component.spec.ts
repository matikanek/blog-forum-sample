import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListListComponent } from './posts-list-list.component';

describe('PostsListListComponent', () => {
  let component: PostsListListComponent;
  let fixture: ComponentFixture<PostsListListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostsListListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
