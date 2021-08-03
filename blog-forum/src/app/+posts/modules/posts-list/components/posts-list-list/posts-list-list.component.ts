import { Component, Input, OnInit, Output } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterService } from 'src/app/shared/services/router.service';
import { 
  faCode, 
  faLocationArrow, 
  faMapMarkerAlt, 
  faHeart, 
  faDollarSign,
  faArrowUp,
  faArrowLeft, 
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts-list-list',
  templateUrl: './posts-list-list.component.html',
  styleUrls: ['./posts-list-list.component.scss']
})
export class PostsListListComponent implements OnInit {
  @Input() dividedPosts: Post[][] = [];
  currentIndex: number = 0;
  faCode = faCode;
  faLocationArrow = faLocationArrow;
  faMapMarkerAlt = faMapMarkerAlt;
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faArrowUp = faArrowUp;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private routerService: RouterService
  ) { }

  ngOnInit(): void {
    const { page } = this.activatedRoute.snapshot.queryParams;
    if(page) {
      this.currentIndex = +page - 1; //ponieważ page jest string 
    } else { 
      this.routerService.navigateNoReload({ page: 1 });
    }
  }

  prev(): void {
    if(this.currentIndex > 0) {
      this.currentIndex -= 1;
    }
    this.routerService.navigateNoReload({ page: this.currentIndex + 1 });
  }

  next(): void {
    if(this.currentIndex < this.dividedPosts.length-1) {
      this.currentIndex += 1;
    }
    this.routerService.navigateNoReload({ page: this.currentIndex + 1 });
  }

  onSelect(postId: number): void {
    this.router.navigate([`/posts/${postId}`]);
  }
}
