import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';

@Component({
  selector: 'app-popular-offers-section',
  templateUrl: './popular-offers-section.component.html',
  styleUrls: ['./popular-offers-section.component.css']
})
export class PopularOffersSectionComponent implements OnInit {
    camps: Avtokamp[];

    constructor(
        private router: Router,
        private avtokampiService: AvtokampiService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.avtokampiService.getPaging(4, 3).subscribe((camps: Avtokamp[]) => {
            this.camps = camps;
        });
    }

}
