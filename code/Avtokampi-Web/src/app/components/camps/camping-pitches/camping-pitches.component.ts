import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import {KampirnoMesto, Avtokamp, Cenik, Uporabnik} from '../../../models';
import {KampirnaMestaService, AvtokampiService, UserService} from '../../../services';

@Component({
    selector: 'app-camping-pitches',
    templateUrl: './camping-pitches.component.html',
    styleUrls: ['./camping-pitches.component.css']
})
export class CampingPitchesComponent implements OnInit {
    @Input() campId?: number;
    @Input() camp?: Avtokamp;
    @Input() kampMesta?: KampirnoMesto[];
    @Input() cenik?: Cenik;
    user: Uporabnik;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private avtokampiService: AvtokampiService,
        private kampirnaMestaService: KampirnaMestaService,
        private userService: UserService
    ) { }

    ngOnInit() {
        if (!this.campId) {
            this.route.paramMap.subscribe((params: ParamMap) => this.campId = parseInt(params.get('avtokampId')));
        }

        if (this.campId && !this.camp) {
            this.avtokampiService.get(this.campId).subscribe(camp => this.camp = camp);
        }

        if (this.campId && !this.kampMesta) {
            this.kampirnaMestaService.getByAvtokamp(this.campId).subscribe(mesta => this.kampMesta = mesta);
        }

        if (!this.cenik) {
            this.avtokampiService.getCeniki(this.campId).subscribe(ceniki => this.cenik = ceniki[0])
        }
    }

    onSelect(camp: Avtokamp, mesto: KampirnoMesto) {
        // {id: selectedId}
        this.userService.currentUser.subscribe(
            (userData) => {
                this.user = userData;
            }
        );

        if (!this.user.uporabnikId) {
            this.router.navigate(['auth', 'login']);
        }
        else {
            this.router.navigate(['reservations', camp.avtokampId, 'camping-pitches', mesto.kampirnoMestoId]);
        }
    }

}
