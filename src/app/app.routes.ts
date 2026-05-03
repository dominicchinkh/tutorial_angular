import { Routes } from '@angular/router';

import { Class }              from './features/tutorial/component/class/class';
import { ContentProjection }  from './features/tutorial/component/content-projection/content-projection';
import { ControlFlow }        from './features/tutorial/component/control-flow/control-flow';
import { DeferrableView }     from './features/tutorial/component/deferrable-view/deferrable-view';
import { DetailPage }         from './features/tutorial/component/detail-page/detail-page';
import { Directive }          from './features/tutorial/component/directive/directive';
import { Effect }             from './features/tutorial/component/effect/effect';
import { Event }              from './features/tutorial/component/event/event';
import { InjectableService }  from './features/tutorial/component/injectable-service/injectable-service';
import { Image }              from './features/tutorial/component/image/image';
import { InputOutput }        from './features/tutorial/component/input-output/input-output';
import { LifecycleHook }      from './features/tutorial/component/lifecycle-hook/lifecycle-hook';
import { Pipe }               from './features/tutorial/component/pipe/pipe';
import { PropertyBinding }    from './features/tutorial/component/property-binding/property-binding';
import { Signal }             from './features/tutorial/component/signal/signal';
import { SignalForm }         from './features/tutorial/component/signal-form/signal-form';
import { Style }              from './features/tutorial/component/style/style';
import { ReactiveForm }       from './features/tutorial/component/reactive-form/reactive-form';
import { TemplateDrivenForm } from './features/tutorial/component/template-driven-form/template-driven-form';
import { TemplateVariable }   from './features/tutorial/component/template-variable/template-variable';
import { Tutorial }           from './features/tutorial/component/tutorial/tutorial';

export const routes: Routes = [
    {
        path: 'cars/:id',
        title: 'Car Details',
        component: DetailPage
    },
    {
        path: 'class',
        title: 'Class',
        component: Class
    },
    {
        path: 'content-projection',
        title: 'Content Projection',
        component: ContentProjection
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
        path: 'directive',
        title: 'Directive',
        component: Directive
    },
    {
        path: 'effect',
        title: 'Effect',
        component: Effect
    },
    {
        path: 'event',
        title: 'Event',
        component: Event
    },
    {
        path: 'injectable-service',
        title: 'Injectable Service',
        component: InjectableService
    },
    {
        path: 'image',
        title: 'Image',
        component: Image
    },
    {
        path: 'input-output',
        title: 'Input/Output',
        component: InputOutput
    },
    {
        path: 'lifecycle-hook',
        title: 'Lifecycle Hook',
        component: LifecycleHook
    },
    {
        path: 'pipe',
        title: 'Pipe',
        component: Pipe
    },
    {
        path: 'property-binding',
        title: 'Property Binding',
        component: PropertyBinding
    },
    {
        path: 'style',
        title: 'Style',
        component: Style
    },
    {
        path: 'signal',
        title: 'Signal',
        component: Signal
    },
    {
        path: 'signal-form',
        title: 'Signal Form',
        component: SignalForm
    },
    {
        path: 'reactive-form',
        title: 'Reactive Form',
        component: ReactiveForm
    },
    {
        path: 'template-driven-form',
        title: 'Template Driven Form',
        component: TemplateDrivenForm
    },
    {
        path: 'template-variable',
        title: 'Template Variable',
        component: TemplateVariable
    },
    {
        path: '',
        title: 'Tutorial',
        component: Tutorial
    }
];
