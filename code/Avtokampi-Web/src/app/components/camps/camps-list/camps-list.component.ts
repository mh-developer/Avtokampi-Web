import { Component, OnInit } from '@angular/core';
import { AvtokampiService } from '../../../services';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Avtokamp } from 'src/app/models';

@Component({
    selector: 'app-camps-list',
    templateUrl: './camps-list.component.html',
    styleUrls: ['./camps-list.component.css']
})
export class CampsListComponent implements OnInit {
    private camps;

    constructor(
        private router: Router,
        private avtokampiService: AvtokampiService,
        private http: HttpClient
    ) { }

    ngOnInit() {
        this.avtokampiService.getAll().subscribe((camps: Avtokamp[]) => {
            this.camps = camps;
        });
    }

}
