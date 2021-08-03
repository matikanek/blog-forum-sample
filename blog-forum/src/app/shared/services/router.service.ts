import { Location } from '@angular/common';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  navigateNoReload(queryParams: Params): void {
    const url = this.router.createUrlTree(
      [],
      { relativeTo: this.activatedRoute, queryParams }
    ).toString();

    this.location.go(url);
  }
}
