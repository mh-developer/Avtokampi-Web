import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvtokampiService } from 'src/app/services';
import { HttpClient } from '@angular/common/http';
import { Avtokamp } from 'src/app/models';

@Component({
  selector: 'app-special-offers-section',
  templateUrl: './special-offers-section.component.html',
  styleUrls: ['./special-offers-section.component.css']
})
export class SpecialOffersSectionComponent implements OnInit {
    camps: Avtokamp[];

    constructor(
        private router: Router,
        private avtokampiService: AvtokampiService,
        private http: HttpClient
    ) { }

  ngOnInit() {
    this.avtokampiService.getPaging(1, 5).subscribe((camps: Avtokamp[]) => {
        this.camps = camps;
    });
  }

}
