import { Component, DestroyRef, inject, signal } from '@angular/core';
import { CartItem } from '../../model/cart-item';
import { CartStore } from '../../service/cart-store'

@Component({
  selector: 'app-cart-display',
  imports: [],
  templateUrl: './cart-display.html',
  styleUrl: './cart-display.css',
})
export class CartDisplay {
  store = inject(CartStore);

  isProcessingCheckout = signal(false);

  private timeoutId?: ReturnType<typeof setTimeout>;
  private destroyRef = inject(DestroyRef);

  addLaptop() {
    this.store.addItem('1', 'Laptop', 999);
  }

  addMouse() {
    this.store.addItem('2', 'Mouse', 25);
  }

  addKeyboard() {
    this.store.addItem('3', 'Keyboard', 79);
  }

  increaseQuantity(id: string) {
    const currentItem = this.findItem(id);
    if (currentItem) {
      this.store.updateQuantity(currentItem.id, currentItem.quantity + 1);
    }
  }

  decreaseQuantity(id: string) {
    const currentItem = this.findItem(id);
    if (currentItem) {
      this.store.updateQuantity(currentItem.id, currentItem.quantity - 1);
    }
  }

  removeItem(id: string) {
    this.store.removeItem(id);
  }

  clearCart() {
    this.store.clearCart();
  }
  
  processCheckout() {
    this.isProcessingCheckout.set(true);
    this.timeoutId = setTimeout(() => this.isProcessingCheckout.set(false), 2000);
    this.destroyRef.onDestroy(() => clearTimeout(this.timeoutId));
  }

  private findItem(id: string): CartItem | undefined {
    const items = this.store.cartItems();
    return items.find((item: CartItem) => item.id === id)
  }
}
