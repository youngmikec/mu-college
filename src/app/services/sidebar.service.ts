import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SidebarService {
    private displayStatus = new BehaviorSubject <boolean> (false);

    constructor(){}

    setDisplayState(state: boolean = false) {
        this.displayStatus.next(state);
    }

    getDisplayStatus(): Observable<boolean> {
        return this.displayStatus;
    }
}