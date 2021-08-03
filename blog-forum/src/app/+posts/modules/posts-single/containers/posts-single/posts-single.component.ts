import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsQuery } from 'src/app/+posts/store/posts.query';
import { PostsService } from 'src/app/+posts/store/posts.service';
import { PostSingleFactory } from '../../post-single-form.factory';
import { 
  faCode, 
  faLocationArrow, 
  faMapMarkerAlt, 
  faHeart, 
  faDollarSign,
  faArrowUp,
  faArrowLeft, 
  faArrowRight,
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { PostsStore } from 'src/app/+posts/store/posts.store';

@Component({
  selector: 'app-posts-single',
  templateUrl: './posts-single.component.html',
  styleUrls: ['./posts-single.component.scss']
})
export class PostsSingleComponent implements OnInit, OnDestroy {
  posts$ = this.postsQuery.select(state => state.post);
  comments$ = this.postsQuery.select(state => state.comments);
  newCommentForm = this.postSingleFactory.buildForm();
  faCode = faCode;
  faLocationArrow = faLocationArrow;
  faMapMarkerAlt = faMapMarkerAlt;
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faArrowUp = faArrowUp;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faPlus = faPlus;
  isPosting: boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private postsQuery: PostsQuery,
    private location: Location,
    private postSingleFactory: PostSingleFactory,
    private postsStore: PostsStore
  ) { }

  ngOnInit(): void {
    const postId = +this.activatedRoute.snapshot.params.postId;
    this.postsService.getPost(postId);
    this.postsService.getComments(postId);
    this.newCommentForm.valueChanges.subscribe(console.log);
  }

  goBack(): void {
    this.location.back();
    //this.router.navigate(['/posts']);
  }

  onSubmit(): void {
    this.postsService.postComment(this.newCommentForm.value, this.postsQuery.getValue().post?.id as number);
  }

  ngOnDestroy(): void {
    this.postsStore.update({post: undefined});
  }
}
