import { 
  AfterContentInit, Component, ElementRef, InjectionToken, Injector, Type, 
  contentChild, computed, contentChildren, inject, input, signal
} from '@angular/core';
import { NgComponentOutlet } from '@angular/common';

// An InjectionToken is an object that Angular's dependency injection system uses 
// to uniquely identify values for injection. Think of it as a special key that lets 
// you store and retrieve any type of value in Angular's DI system:

// https://angular.dev/guide/di/defining-dependency-providers#automatic-provision-for-non-class-dependencies

const TITLE = new InjectionToken<string>('title');

export interface UserDescriptionConfig {
  id: number;
  value: number;
}

export const USER_DESCRIPTION_DATA = new InjectionToken<UserDescriptionConfig>('UserDescriptionData');

// You should not conditionally include <ng-content> with @if, @for, or @switch. 
// Angular always instantiates and creates DOM nodes for content rendered to a 
// <ng-content> placeholder, even if that <ng-content> placeholder is hidden

@Component({
  selector: 'app-card-title',
  template: `
    <div>
        <ng-content>Card title</ng-content>
    </div>
  `,

  // A provider is required here because the `TITLE` service providing non-class value 
  // and has no providedIn.

  // https://angular.dev/guide/di/defining-dependency-providers#understanding-manual-provider-configuration
  
  providers: [{ provide:TITLE, useValue: 'my title' }]
})
export class CardTitle {
  el = inject(ElementRef);

  get textContent(): string {
    return this.el.nativeElement.textContent?.trim() ?? '';
  }
}

@Component({
  selector: 'app-card-body',
  template: `<ng-content>Card body</ng-content>`
})
export class CardBody {
  el = inject(ElementRef);

  get textContent(): string {
    return this.el.nativeElement.textContent?.trim() ?? '';
  }
}

@Component({
  selector: 'app-user-card-description',
  template: `
    <p>User card description: {{ message() }} {{ configString() }}</p>
    <ng-content></ng-content>
  `
})
export class UserCardDescription {
  message = input<string>('');

  private config = inject(USER_DESCRIPTION_DATA);
  configString = computed(() => {
    return `ID: ${ this.config.id } Value: ${ this.config.value }`;
  })

  increment() {
    this.config.value += 1;
    console.log(this.config.value);
  }
}

@Component({
  selector: 'app-admin-card-description',
  template: `<p>Admin card description</p>`
})
export class AdminCardDescription {
}

// You could create two placeholders for a card title and a card body by using the select attribute

@Component({
  selector: 'app-custom-card',
  imports: [NgComponentOutlet],
  template: `
    <div>
      <!-- 
        <app-card-title>This is the title</app-card-title> 
      -->
      <ng-content select="app-card-title"></ng-content>

      <!-- 
        <app-card-body>This is my custom card body</app-card-body>
        <app-card-body>This is my another custom card body</app-card-body>
        <h3 ngProjectAs="app-card-body">Hello</h3>
      -->
      <ng-content select="app-card-body"></ng-content>

      <!-- Capture all elements that did not match a select attribute -->

      <!--
        <p>This is additional content</p>
      -->
      <ng-content></ng-content>

      <ng-container 
        [ngComponentOutlet]="cardDescriptionType()" 
        [ngComponentOutletInjector]="createUserDescriptionCardInjector({id: 0, value: 0})"
      />

      <button (click)="toggleAdminMode()">Toggle Admin Mode</button>
      
      <!-- 
        1. You can pass inputs to the dynamically rendered component using the ngComponentOutletInputs 

        2. Avoid using ngComponentOutletContent because it relies on manual DOM manipulation, which is incompatible 
        with Angular Hydration and causes errors on reload.

        [ngComponentOutletContent]="userDescriptionContent()"

        Error: NG0503: 
          During serialization, Angular detected DOM nodes that were created outside of 
          Angular context and provided as projectable nodes (likely via ViewContainerRef.createComponent
          or createComponent APIs). Hydration is not supported for such cases, consider refactoring the 
          code to avoid this pattern or using ngSkipHydration on the host element of the component.

        3. You can provide a custom injector to the dynamically created component using ngComponentOutletInjector

        4. You can access the dynamically created component's instance using the directive's exportAs feature 

        #<reference name>="ngComponentOutlet"

        Check out lazy loading component: https://angular.dev/guide/components/programmatic-rendering#lazy-loading-components

      -->

      @for (config of userDescriptionConfig(); track config.id) {
        <ng-container 
          [ngComponentOutlet]="userDescriptionComponent" 
          [ngComponentOutletInputs]="userDescriptionMessage()" 
          [ngComponentOutletInjector]="createUserDescriptionCardInjector(config)"
          #outlet="ngComponentOutlet"
        />
        <button (click)="outlet.componentInstance?.increment()">Increment</button>
      }

      <!--
        <ng-template #contentTemplate>
          <h3>Dynamic Content</h3>
          <p>This content is projected into the card.</p>
        </ng-template>
      -->

    </div>
  `
})
export class CustomCard implements AfterContentInit{
  cardDescriptionType = signal<Type<any>>(AdminCardDescription);

  // Equivalent to:
  // userDescriptionComponent: Type<UserCardDescription> = UserCardDescription;

  userDescriptionComponent: {new(): UserCardDescription} = UserCardDescription;
  userDescriptionMessage = signal({ message: 'This message is for the user' });
  
  /*
  private readonly contentTemplate = viewChild.required('contentTemplate', { read: TemplateRef });

  userDescriptionContent = computed(() => {
    const templateRef = this.contentTemplate();
    
    // Create an EmbeddedView. 
    // This creates the DOM nodes inside Angular's tracking system.
    const viewRef = templateRef.createEmbeddedView(null);
    
    // Important: We return the rootNodes in the 2D array format 
    return [viewRef.rootNodes];
  });
  */

  // Create a new injector
  private baseInjector = inject(Injector);
  
  createUserDescriptionCardInjector(config: UserDescriptionConfig) {
    return Injector.create({
      providers: [
        { provide: USER_DESCRIPTION_DATA, useValue: config }
      ],
      parent: this.baseInjector
    });
  }

  userDescriptionConfig = signal<UserDescriptionConfig[]>([
    { id: 1, value: 13 },
    { id: 2, value: 47 },
  ]);

  /*--------------
   * contentChild
   *
   * Content queries retrieve results from the elements in the component's content — the elements nested 
   * inside the component in the template where it's used.
   * 
   */
  cardTitle1 = contentChild(CardTitle);
  cardTitleText1 = computed(() => this.cardTitle1()?.textContent);

  // Developers most commonly use read to retrieve ElementRef and TemplateRef
  cardTitle2 = contentChild(CardTitle, {read: ElementRef});
  cardTitleText2 = computed(() => this.cardTitle2()?.nativeElement.textContent?.trim());

  /*-----------------
   * contentChildren
   *
   * You can also query for multiple results with the contentChildren function
   *
   */

  // By default, contentChildren queries find only direct children of the component and do not traverse into 
  // descendants. By setting descendants: true, you configure the query to traverse all descendants in the 
  // same template.

  cardsBody = contentChildren(CardBody, {descendants: true});
  cardsBodyText = computed(() => this.cardsBody().map((cardBody) => cardBody.textContent));

  /*---------------
   * ProviderToken
   *
   * You can use any ProviderToken as a locator. This lets you locate elements based on component and 
   * directive providers.
   * 
   */
  titleType = contentChild(TITLE);
  cardTitleValue = computed(() => this.titleType());

  ngAfterContentInit() {
      console.log('Card title: ' + this.cardTitleText1());
      console.log('Card title (with ElementRef): ' + this.cardTitleText2());
      console.log('Card title (with ProviderToken): ' + this.cardTitleValue());
      console.log('Card body: ' + this.cardsBodyText());
  }

  toggleAdminMode() {
    this.cardDescriptionType.update((currentType) => {
      return currentType === AdminCardDescription? UserCardDescription : AdminCardDescription;
    });
  }
}

@Component({
  selector: 'app-footer',
  template: `
    <ng-content>Footer</ng-content>
  `
})
export class Footer{
}

@Component({
  selector: 'app-content-projection',
  imports: [CardBody, CardTitle, CustomCard, Footer],
  templateUrl: './content-projection.html',
  styleUrl: './content-projection.css',
})
export class ContentProjection {
}
