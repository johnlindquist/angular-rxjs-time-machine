import { NgModule } from '@angular/core'
import { StoreModule } from '@ngrx/store'


const reducer = (type, action) => {
    return 'Hello world'
}

@NgModule({
    imports: [StoreModule.provideStore({app:reducer})]
})
export class AppStoreModule {
}