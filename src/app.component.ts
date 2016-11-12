import { Component, Input, ContentChildren, ViewChild, TemplateRef } from '@angular/core'

@Component({
    selector: 'tab',
    template: `
<template>
    <ng-content></ng-content>
</template>
`
})
class Tab {
    @ViewChild(TemplateRef) template
    @Input() title
}


@Component({
    selector: 'tab-container',
    styles:[`
.tab{cursor: pointer}
.tab:hover{font-weight: bold}
`],
    template: `
<span 
    class="tab"
    *ngFor="let tab of tabs" 
    (click)="selectedTemplate = tab.template"
>
    {{tab.title}}
</span>
<div [ngTemplateOutlet]="selectedTemplate"></div>
`
})
class TabContainer {
    @ContentChildren(Tab) tabs
    selectedTemplate

    ngAfterContentInit() {
        this.selectedTemplate = this.tabs.toArray()[0].template
    }
}

@Component({
    selector: 'app',
    template: `
        <tab-container>
           <tab title="One">Content for the <h1>first tab</h1></tab>
           <tab title="Two">The second tab content</tab>
           <tab title="Three">Three is the best!</tab>
        </tab-container> 
        `
})
class App {
}

const declarations = [
    App,
    TabContainer,
    Tab
]
export {
    App,
    declarations
}