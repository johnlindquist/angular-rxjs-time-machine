import {NgModule, Component} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'

@Component({
    selector: 'app',
    template:`<h1>Hmm, no cache</h1>`
})
export class App{}


@NgModule({
    imports:[BrowserModule],
    declarations:[App],
    bootstrap:[App]
})
export class AppModule{

}

const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)