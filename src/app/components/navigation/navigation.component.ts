import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  said: string;

  constructor(
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.said = params.get('id');
    });
  }

}
