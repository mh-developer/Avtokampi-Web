import { Component, OnInit } from '@angular/core';
import {AvtokampiService, KampirnaMestaService, RezervacijeService, UserService} from "../../services/repositories";
import {Avtokamp, KampirnoMesto, Rezervacija, Slika, Uporabnik as User} from "../../models";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

      reservations : Rezervacija[];
      camps: Avtokamp[];
      campingSpots: KampirnoMesto[];
      campImages: Slika[];
      currentUser: User;

      constructor(
          private rezervacijeService: RezervacijeService,
          private userService: UserService,
          private avtokampiService: AvtokampiService,
          private kamprinaMestaService: KampirnaMestaService,
          private domSanitizer: DomSanitizer
      ) {}

      ngOnInit() {
          this.userService.currentUser.subscribe(
              (userData) => {
                  this.currentUser = userData;
              }
          );
          this.rezervacijeService.getUserReservations(this.currentUser.uporabnikId).subscribe(m => {
              this.reservations = m;
              this.camps = [];
              this.campingSpots = [];
              this.campImages = [];
              for (let res of this.reservations) {
                  this.avtokampiService.get(res.avtokamp).subscribe(m => this.camps[res.rezervacijaId] = m);
                  this.kamprinaMestaService.get(res.kampirnoMesto).subscribe(m => this.campingSpots[res.rezervacijaId] = m);
                  this.avtokampiService.getSlika(res.avtokamp).subscribe(m => this.campImages[res.rezervacijaId] = m);
              }
          });
      }

        getImage(image: any) {
            const preparedImg = image ? this.domSanitizer.bypassSecurityTrustStyle(`url('data:image/jpg;base64,${image}')`) :
                `url('assets/images/destination-1.jpg')`;
            return preparedImg;
        }

}
