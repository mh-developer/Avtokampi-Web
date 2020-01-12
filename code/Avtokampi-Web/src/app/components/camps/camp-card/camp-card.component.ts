import { Slika, Avtokamp, Cenik } from './../../../models';
import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { AvtokampiService } from '../../../services';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer } from '@angular/platform-browser';
import {min} from "rxjs/operators";

@Component({
    selector: 'app-camp-card',
    templateUrl: './camp-card.component.html',
    styleUrls: ['./camp-card.component.css']
})
export class CampCardComponent implements OnInit {
    @Input() campId?: number;
    @Input() camp: Avtokamp;
    ceniki: Cenik[];
    cene: number[];
    minCena: number;
    campImg: Slika;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private avtokampiService: AvtokampiService,
        private http: HttpClient,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.avtokampiService.getSlika(this.campId ? this.campId : this.camp.avtokampId).subscribe(img => {
            this.campImg = img;
        });

        this.avtokampiService.getCeniki(this.campId ? this.campId : this.camp.avtokampId).subscribe(c => {
            this.ceniki = c;
            this.cene = [];
            for (let cenik of this.ceniki){
                this.cene.push(cenik.cena)
            }
            this.minCena = this.cene.reduce((a, b)=>Math.min(a, b));
            console.log(this.minCena)
        })
    }

    getImage(image: any) {
        const preparedImg = image ? this.domSanitizer.bypassSecurityTrustStyle(`url('data:image/jpg;base64,${image}')`) :
            `url('assets/images/destination-1.jpg')`;
        return preparedImg;
    }

    onSelect(camp: Avtokamp) {
        // {id: selectedId}
        this.router.navigate([this.router.url === '/reservations' ? 'reservations' : 'camp', camp.avtokampId]);
    }
}
