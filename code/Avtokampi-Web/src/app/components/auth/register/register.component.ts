import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    routerSubscription: any;

    constructor(private router: Router) { }

    ngOnInit() {
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                $.getScript('assets/js/main.js');
            });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

}
