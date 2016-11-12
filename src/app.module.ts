import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { App, declarations as appComponentDeclarations } from './app.component'

const imports = [BrowserModule]
const bootstrap = [App]
const declarations = [
    ...appComponentDeclarations
]

@NgModule({
    imports,
    declarations,
    bootstrap
})
export class AppModule {}