import { 
    Component, 
    OnInit, 
    OnChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
} from '@angular/core';

@Component({
    selector: 'app-lifecycle-hook',
    template: ``
})
export class LifecycleHook implements 
    OnInit, 
    OnChanges, 
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
    constructor() {
        console.log('constructor()');
    }

    ngOnInit() {
        console.log('ngOnInit()');
    }

    ngOnChanges() {
        console.log('ngOnChanges()');
    }

    ngDoCheck() {
        console.log('ngDoCheck()');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit()');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked()');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit()');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked()');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy()');
    }
}