import { 
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component, 
    DestroyRef,
    DoCheck,
    ElementRef,
    OnChanges, 
    OnDestroy,
    OnInit,
    Renderer2,
    SimpleChanges,
    afterNextRender,
    inject,
    input
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  imports: [],
  templateUrl: './lifecycle-hook.html',
  styleUrl: './lifecycle-hook.css',
})
export class LifecycleHook implements 
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    DoCheck,
    OnChanges, 
    OnDestroy,
    OnInit
{
    name = input<string>('');

    private renderer = inject(Renderer2);
    private elementRef = inject(ElementRef);

    private color: 'yellow' | 'red' | undefined;

    /* 
     * Runs when Angular instantiates the component
     */
    constructor() {
        console.log('constructor()');

        /*
         * An alternative to the `ngOnDestroy` method, you can register a callback to be invoked
         * upon the component's destruction.
         *
         *   inject(DestroyRef).onDestroy(() => {
         *       console.log('Lifecyclehook destruction');
         *   });
         */

        /*
         * `afterEveryRender` and `afterNextRender` must be called in an injection context, typically a component's constructor
         *
         * You can use render callbacks to perform manual DOM operations. See Using DOM APIs (https://angular.dev/guide/components/dom-apis) 
         * for guidance on working with the DOM in Angular.
         */

        /*---------
         * DOM API
         *
         * Components can inject ElementRef to get a reference to the component's host element.
         * 
         * The nativeElement property references the host Element instance
         * https://developer.mozilla.org/en-US/docs/Web/API/Element
         * 
         */
        
        /*
         * Runs once the next time that all components have been rendered to the DOM
         */
        const nativeElement = this.elementRef.nativeElement;

        afterNextRender({
            // Use the `Write` phase to write to a geometric property.
            write: () => {
                console.log('afterNextRender() - write');
                
                // Avoid direct DOM manipulation whenever possible. Always prefer expressing your DOM's 
                // structure in component templates and updating that DOM with bindings.

                // Never directly manipulate the DOM inside of other Angular lifecycle hooks.

                console.log(nativeElement.querySelector('p').textContent);

                // Communicate whether anything changed to the read phase.
                return true;
            },
            // Use the `Read` phase to read geometric properties after all writes have occurred.
            read: (didWrite) => {
                console.log('afterNextRender() - read');

                if (didWrite) {
                    // const height = nativeElement.getBoundingClientRect().height;
                }
            }
        });

        /*
         * Runs every time all components have been rendered to the DOM
         */
        // afterEveryRender() {
        //     console.log('afterEveryRender()');
        // }
    }

    changeStyle() {
        this.color = this.color === 'yellow'? 'red' : 'yellow';

        // In modern Angular development, you should first try to achieve your goal using Signal-based 
        // inputs, HostBindings, or Directives. Only reach for Renderer2 if you are integrating a third-party 
        // library (like D3 or Chart.js) that requires direct DOM access.
        
        // Also: addClass, removeClass, setAttribute, setProperty, appendChild
        this.renderer.setStyle(this.elementRef.nativeElement.querySelector('div'), 'background-color', this.color);
    }

    /*
     * Runs once after Angular has initialized all the component's input with their initial values.
     *
     * This step happens before the component's own template is initialized. This means that you can 
     * update the component's state based on its initial input values.
     */
    ngOnInit() {
        console.log('ngOnInit()');
    }

    /*
     * Runs every time the component's inputs have changed
     *
     * This step happens before the component's own template is checked. This means that you can update 
     * the component's state based on its initial input values.
     */
    ngOnChanges(changes: SimpleChanges<LifecycleHook>) {
        console.log('ngOnChanges()');

        if (changes.name) {
            console.log(`Previous: ${changes.name.previousValue}`);
            console.log(`Current: ${changes.name.currentValue}`);
            console.log(`Is first: ${changes.name.firstChange}`);
        }
    }

    /*
     * Runs every time the component is checked for changes
     *
     * WARNING: This method runs very frequently and can significantly impact your page's performance. Avoid defining 
     * this hook whenever possible, only using it when you have no alternative.
     */
    ngDoCheck() {
        console.log('ngDoCheck()');
    }

    /*
     * Runs once after the component's content has been initialized
     *
     * You can use this lifecycle hook to read the results of content queries
     */
    ngAfterContentInit() {
        console.log('ngAfterContentInit()');
    }

    /*
     * Runs every time this component content has been checked for changes
     *
     * WARNING: This method runs very frequently and can significantly impact your page's performance. Avoid defining 
     * this hook whenever possible, only using it when you have no alternative.
     */
    ngAfterContentChecked() {
        console.log('ngAfterContentChecked()');
    }

    /*
     * Runs once after the component's view has been initialized
     *
     * You can use this lifecycle hook to read the results of view queries
     */
    ngAfterViewInit() {
        console.log('ngAfterViewInit()');
    }

    /*
     * Run every time the component's view has been checked for changes
     *
     * WARNING: This method runs very frequently and can significantly impact your page's performance. Avoid defining 
     * this hook whenever possible, only using it when you have no alternative.
     */
    ngAfterViewChecked() {
        console.log('ngAfterViewChecked()');
    }

    /* 
     * Run once before the component is destroyed
     */
    ngOnDestroy() {
        console.log('ngOnDestroy()');
    }
}
