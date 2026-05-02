import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Highlight } from '../../directive/highlight';

@Component({
  selector: 'app-highlight',
  imports: [Highlight],
  templateUrl: './directive.html',
  styleUrl: './directive.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Directive {}
