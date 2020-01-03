import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Avtokamp, Slika, Storitev, KampirnoMesto, Mnenje } from '../../../models';
import { AvtokampiService, StoritveKampaService, KampirnaMestaService, MnenjaService } from '../../../services';

@Component({
    selector: 'app-camp-details',
    templateUrl: './camp-details.component.html',
    styleUrls: ['./camp-details.component.css']
})
export class CampDetailsComponent implements OnInit {
    campId: number;
    campImg: Slika[];
    camp: Avtokamp;
    storitve: Storitev[];
    mnenja: Mnenje[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private avtokampiService: AvtokampiService,
        private storitveService: StoritveKampaService,
        private kampirnaMestaService: KampirnaMestaService,
        private mnenjaService: MnenjaService,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.route.paramMap.subscribe((params: ParamMap) => {
            this.campId = parseInt(params.get('avtokampId'));
        });

        this.avtokampiService.get(this.campId).subscribe(camp => this.camp = camp);

        this.avtokampiService.getSlike(this.campId).subscribe(imgs => this.campImg = imgs);

        this.storitveService.get(this.campId).subscribe(storitve => this.storitve = storitve);

        this.mnenjaService.getMnenjaByAvtokamp(this.campId).subscribe(mnenja => this.mnenja = mnenja);
    }

    getFirstImg() {
        return this.campImg && this.campImg[0] && this.campImg[0].slika ? this.campImg[0].slika : '';
    }

    getImage(image: any) {
        const preparedImg = image ? this.domSanitizer.bypassSecurityTrustStyle(`url('data:image/jpg;base64,${image}')`) :
            `url('assets/images/destination-1.jpg')`;
        return preparedImg;
    }

    getImageGallery(image: any) {
        const preparedImg = image ? `data:image/jpg;base64,${image}` :
            `assets/images/destination-1.jpg`;
        return preparedImg;
    }

    getRange() {
        return [...Array(5).keys()].map(i => i + 1);
    }
}
