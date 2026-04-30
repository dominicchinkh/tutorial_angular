import {Component} from '@angular/core';
import {NgOptimizedImage, provideImgixLoader} from '@angular/common';

@Component({
  selector: 'app-image',
  imports: [NgOptimizedImage],
  providers: [provideImgixLoader('http://localhost:4200/')],
  templateUrl: './image.html',
  styleUrl: './image.css',
})
export class Image {
  logoUrl = "logo.png";
  logoAlt = "Angular logo";
}
