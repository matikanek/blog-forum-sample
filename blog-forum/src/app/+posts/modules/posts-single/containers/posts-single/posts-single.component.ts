import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsQuery } from 'src/app/+posts/store/posts.query';
import { PostsService } from 'src/app/+posts/store/posts.service';
import { comments } from 'src/app/shared/models/comment.model';
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
  comments = comments
  faCode = faCode;
  faLocationArrow = faLocationArrow;
  faMapMarkerAlt = faMapMarkerAlt;
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faArrowUp = faArrowUp;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faPlus = faPlus;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postsService: PostsService,
    private postsQuery: PostsQuery,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.postsService.getPost(+this.activatedRoute.snapshot.params.postId);
  }

  goBack(): void {
    this.location.back();
    //this.router.navigate(['/posts']);
  }
}
