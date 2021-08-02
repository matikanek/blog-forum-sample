import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsQuery } from 'src/app/+posts/store/posts.query';
import { PostsService } from 'src/app/+posts/store/posts.service';
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

@Component({
  selector: 'app-posts-single',
  templateUrl: './posts-single.component.html',
  styleUrls: ['./posts-single.component.scss']
})
export class PostsSingleComponent implements OnInit {
  posts$ = this.postsQuery.select(state => state.post);
  comments$ = this.postsQuery.select(state => state.comments);
  faCode = faCode;
  faLocationArrow = faLocationArrow;
  faMapMarkerAlt = faMapMarkerAlt;
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faArrowUp = faArrowUp;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faPlus = faPlus;
  isPosting = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private postsQuery: PostsQuery,
    private location: Location,
  ) { }

  ngOnInit(): void {
    console.log(this.isPosting);
    const postId = +this.activatedRoute.snapshot.params.postId;
    this.postsService.getPost(postId);
    this.postsService.getComments(postId);
  }

  goBack(): void {
    this.location.back();
    //this.router.navigate(['/posts']);
  }
}
