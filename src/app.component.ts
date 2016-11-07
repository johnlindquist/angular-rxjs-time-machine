import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
@Component({
    selector: 'app',
    template: `<h1 class="code">{{store.select('app') | async}}</h1>`
})
export class App {
    constructor(private store:Store<any>){}
}