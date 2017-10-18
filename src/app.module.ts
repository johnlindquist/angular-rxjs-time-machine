import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { App } from './app.component'
import { AppStoreModule } from './store'
import { Clock } from './clock'


@NgModule({
    imports: [BrowserModule, AppStoreModule],
    declarations: [App, Clock],
    bootstrap: [App]
})
export class AppModule {

}