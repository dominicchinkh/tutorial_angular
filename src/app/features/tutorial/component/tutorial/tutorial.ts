import { Component } from '@angular/core';
import { ContentProjection } from '../content-projection';
import { ControlFlow } from '../control-flow';
import { DeferrableView } from '../deferrable-view';
import { Event } from '../event';
import { Image } from '../image';
import { PropertyBinding } from '../property-binding';
import { Output } from '../output';
import { Input } from '../input';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.html',
  styleUrl: './tutorial.css',
  imports: [ContentProjection, ControlFlow, DeferrableView, Event, Image, Input, PropertyBinding, Output]
})
export class Tutorial {
  city = 'San Francisco';

  items = new Array();

  addItem(item: string) {
    this.items.push(item)
  }
}
