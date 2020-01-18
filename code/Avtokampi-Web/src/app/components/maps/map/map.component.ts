import { Component, OnInit } from '@angular/core';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    private _onDestroy = new Subject<void>();
    camps: Avtokamp[];

    constructor(
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.avtokampiService.getAll().pipe(takeUntil(this._onDestroy)).subscribe((camps: Avtokamp[]) => {
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
