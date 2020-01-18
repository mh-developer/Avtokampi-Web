import { Component, OnInit } from '@angular/core';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-featured-destination-section',
    templateUrl: './featured-destination-section.component.html',
    styleUrls: ['./featured-destination-section.component.css']
})
export class FeaturedDestinationSectionComponent implements OnInit {
    private _onDestroy = new Subject<void>();
    camps: Avtokamp[];

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.avtokampiService.getPaging(2, 5).pipe(takeUntil(this._onDestroy)).subscribe((camps: Avtokamp[]) => {
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
