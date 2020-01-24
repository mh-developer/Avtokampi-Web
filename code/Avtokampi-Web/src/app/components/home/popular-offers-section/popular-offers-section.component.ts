import { Component, OnInit, OnDestroy } from '@angular/core';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-popular-offers-section',
  templateUrl: './popular-offers-section.component.html',
  styleUrls: ['./popular-offers-section.component.css']
})
export class PopularOffersSectionComponent implements OnInit, OnDestroy {
    private _onDestroy = new Subject<void>();
    camps: Avtokamp[];

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.avtokampiService.getPaging(4, 3).pipe(takeUntil(this._onDestroy)).subscribe((camps: Avtokamp[]) => {
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
