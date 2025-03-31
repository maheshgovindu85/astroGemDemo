import { HostListener, Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {
  itemsPerSlide: number = 1;
  constructor() { }

  updateCardsPerSlide(): void {
    const width = window.innerWidth;

    // Define how many items per slide based on screen size
    if (width >= 1200) {
      this.itemsPerSlide = 4;  // Desktop: show 4 cards
    } else if (width >= 768) {
      this.itemsPerSlide = 2;  // Tablet: show 2 cards
    } else {
      this.itemsPerSlide = 1;  // Mobile: show 1 card
    }
  }


}
