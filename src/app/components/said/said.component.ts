import {AfterViewInit, Component, ElementRef, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SaidService} from './said.service';

@Component({
  selector: 'app-said',
  templateUrl: './said.component.html',
  styleUrls: ['./said.component.css']
})
export class SAIDComponent implements OnInit, AfterViewInit {
  said;
  data;
  mzd;
  prid;
  perd;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private saidService: SaidService,
    private elementRef: ElementRef
  ) {
  }

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
          this.mzd = this.data.medizinischeInformationen;
          this.prid = this.data.privateDaten;
          this.perd = this.data.persoenlicheDaten;
        },
        error => {
          console.log(error);
        });
  }
}
