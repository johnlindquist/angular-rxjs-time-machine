import { Component, Input, ContentChildren } from '@angular/core'

@Component({
    selector:'geo-address',
    template:`<h2>Latitude</h2>{{lat}}`
})
export class GeoAddress{
    @Input() lat
}

@Component({
    selector:'geo-position',
    template:`<ng-content></ng-content>`
})
export class GeoPosition{
    @ContentChildren(GeoAddress) geoAds
    value = 'Can you see me now?'

    ngAfterContentInit(){
        const geoAds = this.geoAds.toArray()
        geoAds.forEach(ad => ad.lat = Math.random())
    }
}


@Component({
    selector: 'app',
    template: `b
        
        <hr>
        <geo-position>
            <geo-address></geo-address>                                                                
            <geo-address></geo-address>                                                                
            <geo-address></geo-address>                                                                
        </geo-position>
        `
})
export class App {}