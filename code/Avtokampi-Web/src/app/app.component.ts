import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Avtokampi';

    routerSubscription: any;

    constructor(private _router: Router) { }

    ngOnInit() {
        this.recallJsFuntions();
    }

    recallJsFuntions() {
        this.routerSubscription = this._router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(event => {
                $.getScript('assets/js/main.js');
            });
    }

    ngOnDestroy() {
        this.routerSubscription.unsubscribe();
    }

}
