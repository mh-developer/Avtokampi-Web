import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MouseEvent } from '@agm/core';
import { Avtokamp } from '../../../models';
import { AvtokampiService } from '../../../services';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
    camps: Avtokamp[];

    constructor(
        private router: Router,
        private avtokampiService: AvtokampiService
    ) { }

    ngOnInit() {
        this.avtokampiService.getAll().subscribe((camps: Avtokamp[]) => {
            this.camps = camps;
        });
    }
}
