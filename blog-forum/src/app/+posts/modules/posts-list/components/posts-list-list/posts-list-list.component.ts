import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { 
  faCode, 
  faLocationArrow, 
  faMapMarkerAlt, 
  faHeart, 
  faDollarSign,
  faArrowUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-posts-list-list',
  templateUrl: './posts-list-list.component.html',
  styleUrls: ['./posts-list-list.component.scss']
})
export class PostsListListComponent implements OnInit {
  @Input() posts: Post[] = [];
  faCode = faCode;
  faLocationArrow = faLocationArrow;
  faMapMarkerAlt = faMapMarkerAlt;
  faHeart = faHeart;
  faDollarSign = faDollarSign;
  faArrowUp = faArrowUp;

  constructor() { }

  ngOnInit(): void {

  }

}
