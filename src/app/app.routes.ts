import { Routes } from '@angular/router';
import { InjectableService } from './features/tutorial/component/injectable-service';
import { ControlFlow } from './features/tutorial/component/control-flow';
import { DeferrableView } from './features/tutorial/component/deferrable-view';
import { Event } from './features/tutorial/component/event';
import { Image } from './features/tutorial/component/image';
import { InputOutput } from './features/tutorial/component/input-output';
import { LifecycleHook } from './features/tutorial/component/lifecycle-hook';
import { MyClass } from './features/tutorial/component/my-class';
import { Pipe } from './features/tutorial/component/pipe';
import { PropertyBinding } from './features/tutorial/component/property-binding';
import { Signal } from './features/tutorial/component/signal';
import { Style } from './features/tutorial/component/style';
import { Tutorial } from './features/tutorial/component/tutorial/tutorial';
import { TemplateDrivenForm } from './features/tutorial/component/template-driven-form';
import { ReactiveForm } from './features/tutorial/component/reactive-form';

export const routes: Routes = [
    {
        path: '',
        title: 'Tutorial',
        component: Tutorial
    },
    {
        path: 'control-flow',
        title: 'Control Flow',
        component: ControlFlow
    },
    {
        path: 'deferrable-view',
        title: 'Deferrable View',
        component: DeferrableView
    },
    {
        path: 'event',
        title: 'Event',
        component: Event
    },
    {
        path: 'image',
        title: 'Image',
        component: Image
    },
    {
        path: 'property-binding',
        title: 'Property Binding',
        component: PropertyBinding
    },
    {
        path: 'input-output',
        title: 'Input/Output',
        component: InputOutput
    },
    {
        path: 'template-driven-form',
        title: 'Template Driven Form',
        component: TemplateDrivenForm
    },
    {
        path: 'reactive-form',
        title: 'Reactive Form',
        component: ReactiveForm
    },
    {
        path: 'injectable-service',
        title: 'Injectable Service',
        component: InjectableService
    },
    {
        path: 'pipe',
        title: 'Pipe',
        component: Pipe
    },
    {
        path: 'signal',
        title: 'Signal',
        component: Signal
    },
    {
        path: 'lifecycle-hook',
        title: 'Lifecycle Hook',
        component: LifecycleHook
    },
    {
        path: 'class',
        title: 'Class',
        component: MyClass
    },
    {
        path: 'style',
        title: 'Style',
        component: Style
    }
];
