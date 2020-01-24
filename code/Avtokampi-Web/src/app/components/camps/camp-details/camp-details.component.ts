import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Avtokamp, Slika, Storitev, Mnenje, Cenik } from '../../../models';
import { AvtokampiService, StoritveKampaService, MnenjaService } from '../../../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-camp-details',
    templateUrl: './camp-details.component.html',
    styleUrls: ['./camp-details.component.css']
})
export class CampDetailsComponent implements OnInit, OnDestroy {
    private _onDestroy = new Subject<void>();
    campId: number;
    campImg: Slika[];
    camp: Avtokamp;
    storitve: Storitev[];
    mnenja: Mnenje[];
    cenik: Cenik;

    constructor(
        private route: ActivatedRoute,
        private avtokampiService: AvtokampiService,
        private storitveService: StoritveKampaService,
        private mnenjaService: MnenjaService,
        private domSanitizer: DomSanitizer
    ) { }

    ngOnInit() {
        this.route.paramMap.pipe(takeUntil(this._onDestroy)).subscribe((params: ParamMap) => {
            this.campId = parseInt(params.get('avtokampId'));
        });

        this.avtokampiService.get(this.campId).pipe(takeUntil(this._onDestroy)).subscribe(camp => this.camp = camp);

        this.avtokampiService.getSlike(this.campId).pipe(takeUntil(this._onDestroy)).subscribe(imgs => this.campImg = imgs);

        this.storitveService.get(this.campId).pipe(takeUntil(this._onDestroy)).subscribe(storitve => this.storitve = storitve);

        this.mnenjaService.getMnenjaByAvtokamp(this.campId).pipe(takeUntil(this._onDestroy)).subscribe(mnenja => this.mnenja = mnenja);

        this.avtokampiService.getCeniki(this.campId).pipe(takeUntil(this._onDestroy)).subscribe(cenik => this.cenik = cenik[0]);
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
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

    trackByImgId(index, img) {
        return img.slikaId;
    }

    trackByServiceId(index, storitev) {
        return storitev.storitevId;
    }

    trackByCommentId(index, comment) {
        return comment.mnenjeId;
    }
}
