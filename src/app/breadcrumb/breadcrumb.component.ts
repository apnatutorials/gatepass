import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/Router';
import { BreadCrumb } from './breadcrumb';
import { BreadCrumbs } from '../class/Breadcrumbs'
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
/**
 * BreadcrumbComponent 
 * for showing bread crumbs 
 */
export class BreadcrumbComponent implements OnInit {

  /**
   * breadcrumb$ is a observer userd to store breadcrumbs values
   */
  breadcrumbs$ = this.router.events
    .filter(event => event instanceof NavigationEnd)
    .distinctUntilChanged()
    .map(event => this.buildBreadCrumb(this.activatedRoute.root));

  breadcrumbArray: Array<BreadCrumbs> = null;

  /**
   * 
   * @param activatedRoute 
   * @param router 
   * constructor of BreadCrumbComponent
   */
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.breadcrumbArray = new Array();
  }

  ngOnInit() {
  }

  /**
   * 
   * @param route 
   * @param url 
   * @param breadcrumbs 
   * function to build and return breadcrumb array
   */
  buildBreadCrumb(route: ActivatedRoute, url: string = '',
    breadcrumbs: Array<BreadCrumb> = []): Array<BreadCrumb> {

    const label = route.routeConfig ? route.routeConfig.data['breadcrumb'] : 'होम';
    const path = route.routeConfig ? route.routeConfig.path : '';
      
    const nextUrl = `${url}${path}/`;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumb = [...breadcrumbs, breadcrumb];
    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumb);
    }
    return newBreadcrumb;
  }

}
