import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, NavigationEnd } from '@angular/router';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-featured-destination-section',
    templateUrl: './featured-destination-section.component.html',
    styleUrls: ['./featured-destination-section.component.css']
})
export class FeaturedDestinationSectionComponent implements OnInit {
    camps: Avtokamp[];

    constructor(
        private router: Router,
        private avtokampiService: AvtokampiService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.avtokampiService.getPaging(2, 5).subscribe((camps: Avtokamp[]) => {
            this.camps = camps;
        });
    }

}
