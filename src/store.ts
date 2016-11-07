import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'
import { people, clock } from './reducers'

@NgModule({
    imports: [StoreModule.provideStore({people, clock})]
})
export class AppStoreModule {
}