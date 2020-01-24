import { Slika, Avtokamp, Cenik } from './../../../models';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AvtokampiService } from '../../../services';
import { DomSanitizer } from '@angular/platform-browser';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-camp-card',
    templateUrl: './camp-card.component.html',
    styleUrls: ['./camp-card.component.css']
})
export class CampCardComponent implements OnInit, OnDestroy {
    private _onDestroy = new Subject<void>();
    @Input() campId?: number;
    @Input() camp: Avtokamp;
    ceniki: Cenik[];
    cene: number[];
    minCena: number;
    campImg: Observable<Slika>;

    constructor(
        private router: Router,
        private avtokampiService: AvtokampiService,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.campImg = this.avtokampiService.getSlika(this.campId ? this.campId : this.camp.avtokampId);

        // this.avtokampiService.getSlika(this.campId ? this.campId : this.camp.avtokampId)
        // .pipe(takeUntil(this._onDestroy))
        // .subscribe(img => {
        //     this.campImg = img;
        // });

        this.avtokampiService.getCeniki(this.campId ? this.campId : this.camp.avtokampId)
        .pipe(takeUntil(this._onDestroy))
        .subscribe(c => {
            this.ceniki = c;
            this.cene = [];
            for (let cenik of this.ceniki) {
                this.cene.push(cenik.cena);
            }
            this.minCena = this.cene.reduce((a, b) => Math.min(a, b));
        });
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
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
