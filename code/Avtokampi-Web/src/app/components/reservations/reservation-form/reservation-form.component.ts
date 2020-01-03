import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Avtokamp, KampirnoMesto, Uporabnik as User, VrstaKampiranja } from '../../../models';
import { AvtokampiService, KampirnaMestaService, UserService, RezervacijeService } from '../../../services';

@Component({
    selector: 'app-reservation-form',
    templateUrl: './reservation-form.component.html',
    styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {
    @Input() campId?: number;
    @Input() kampMestoId?: number;
    @Input() camp?: Avtokamp;
    @Input() kampMesto?: KampirnoMesto;
    user: User = {} as User;
    isSubmitting = false;
    reservationForm: FormGroup;
    vrstaKampiranjaKampa: VrstaKampiranja[];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private avtokampiService: AvtokampiService,
        private kampirnaMestaService: KampirnaMestaService,
        private reservationService: RezervacijeService,
        private userService: UserService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        if (!this.campId) {
            this.route.paramMap.subscribe((params: ParamMap) => this.campId = parseInt(params.get('avtokampId')));
        }

        if (!this.kampMestoId) {
            this.route.paramMap.subscribe((params: ParamMap) => this.kampMestoId = parseInt(params.get('kampirnoMestoId')));
        }

        if (this.campId && !this.camp) {
            this.avtokampiService.get(this.campId).subscribe(camp => this.camp = camp);
        }

        if (this.kampMestoId && !this.kampMesto) {
            this.kampirnaMestaService.get(this.kampMestoId).subscribe(mesta => this.kampMesto = mesta);
        }

        this.reservationService.getVrsteKampiranja().subscribe(vrsta => this.vrstaKampiranjaKampa = vrsta);

        Object.assign(this.user, this.userService.getCurrentUser());

        this.reservationForm = this.fb.group({
            'trajanjeOd': ['', Validators.required],
            'trajanjeDo': ['', Validators.required],
            'vrstaKampiranja': ['', Validators.required],
            'gdpr': [false, Validators.required]
        });
    }

    getKampMestoArray() {
        return [this.kampMesto];
    }

    submitForm() {
        this.isSubmitting = true;
        // this.errors = { errors: {} };

        let reservationData = this.reservationForm.value;
        reservationData = {
            ...reservationData,
            avtokamp: this.campId,
            kampirnoMesto: this.kampMestoId,
            uporabnik: this.user.uporabnikId,
            statusRezervacije: 1,
        };
        this.reservationService.post(reservationData)
            .subscribe(
                data => this.router.navigateByUrl('/'),
                err => {
                    console.log(err);
                    // this.errors = err;
                    this.isSubmitting = false;
                }
            );
    }
}
