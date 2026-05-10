import { ChangeDetectionStrategy, Component, model } from '@angular/core';
import { Input } from '../input/input';
import { Model } from '../model/model';
import { Output } from '../output/output';

@Component({
  selector: 'app-input-output',
  imports: [Input, Model, Output],
  templateUrl: './input-output.html',
  styleUrl: './input-output.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputOutput {
  items = new Array<string>();

  agreeToTerms = model(false);

  // You can bind a plain JavaScript property to a model input
  tooltip = 'Help'

  addItem(item: string) {
    this.items.push(item)
  }

  toogleTermsFromParent() {
    this.agreeToTerms.set(!this.agreeToTerms());
  }

  reset() {
    this.agreeToTerms.set(false);
  }
}
