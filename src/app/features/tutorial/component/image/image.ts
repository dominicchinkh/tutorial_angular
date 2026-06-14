import {Component} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
  selector: 'app-image',

  // The NgOptimizedImage directive makes it easy to adopt performance best 
  // practices for loading images.
  
  // https://angular.dev/guide/image-optimization
  imports: [NgOptimizedImage],

  // To use an existing loader for a third-party image service, add the provider 
  // factory for your chosen service to the providers array

  // https://angular.dev/guide/image-optimization#built-in-loaders
  providers: [provideImgixLoader('http://localhost:4200/')],
  
  templateUrl: './image.html',
  styleUrl: './image.css',
})
export class Image {
  logoUrl = "logo.png";
  logoAlt = "Angular logo";
}
