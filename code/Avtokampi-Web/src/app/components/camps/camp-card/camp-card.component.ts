import { Slika } from './../../../models/slike.model';
import { Pravica } from './../../../models/pravice.model';
import { Avtokamp } from 'src/app/models';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AvtokampiService } from 'src/app/services';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-camp-card',
    templateUrl: './camp-card.component.html',
    styleUrls: ['./camp-card.component.css']
})
export class CampCardComponent implements OnInit {

    @Input() camp: Avtokamp;
    private campImg: Slika;

    constructor(
        private router: Router,
        private avtokampiService: AvtokampiService,
        private http: HttpClient,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.avtokampiService.getSlike(this.camp.avtokampId).subscribe(imgs => {
            this.campImg = imgs[0];
        });
    }

    getImage(image: any) {
        const preparedImg = image ? this.domSanitizer.bypassSecurityTrustStyle(`url('data:image/jpg;base64,${image}')`) :
                                    `url('assets/images/destination-1.jpg')`;
        return preparedImg;
    }

}
