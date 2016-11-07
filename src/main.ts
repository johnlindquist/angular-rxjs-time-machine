import 'tachyons/css/tachyons.min.css'

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module'

const platform = platformBrowserDynamic()
platform.bootstrapModule(AppModule)