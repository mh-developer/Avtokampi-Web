import { Avtokamp } from './../../../models';
import { Component, OnInit } from '@angular/core';
import { AvtokampiService } from '../../../services';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-camps-list',
    templateUrl: './camps-list.component.html',
    styleUrls: ['./camps-list.component.css']
})
export class CampsListComponent implements OnInit {
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
