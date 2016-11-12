import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { App, GeoPosition, GeoAddress } from './app.component'


@NgModule({
    imports: [BrowserModule],
    declarations: [App, GeoPosition, GeoAddress],
    bootstrap: [App]
})
export class AppModule {

}