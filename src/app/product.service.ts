import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor() {}

  readOrder(order) {
    const text = order.map(item => `${item.product}: ${item.quantity}`).join(', ');
    const speech = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(speech);
  }
}
