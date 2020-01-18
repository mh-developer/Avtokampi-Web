import { Component, OnInit } from '@angular/core';
import { AvtokampiService } from 'src/app/services';
import { Avtokamp } from 'src/app/models';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-special-offers-section',
    templateUrl: './special-offers-section.component.html',
    styleUrls: ['./special-offers-section.component.css']
})
export class SpecialOffersSectionComponent implements OnInit {
    private _onDestroy = new Subject<void>();
    camps: Avtokamp[];

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.avtokampiService.getPaging(1, 5).pipe(takeUntil(this._onDestroy)).subscribe((camps: Avtokamp[]) => {
            this.camps = camps;
        });
    }

    ngOnDestroy(): void {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    trackById(index, camp) {
        return camp.avtokampId;
    }

}
