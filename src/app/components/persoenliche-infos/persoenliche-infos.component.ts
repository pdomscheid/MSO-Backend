import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SaidService} from '../said/said.service';

@Component({
  selector: 'app-persoenliche-infos',
  templateUrl: './persoenliche-infos.component.html',
  styleUrls: ['./persoenliche-infos.component.css']
})
export class PersoenlicheInfosComponent implements OnInit, AfterViewInit {
  said;
  data;
  perd;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private saidService: SaidService,
    private elementRef: ElementRef
  ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#F0F2F1';
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.said = params.get('id');
    });

    this.saidService.getData(this.said)
      .subscribe((data: any) => {
          this.data = data;
          this.perd = data.persoenlicheDaten;
        },
        error => {
          console.log(error);
        });
  }
}
