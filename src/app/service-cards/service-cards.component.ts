import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface ServiceCard {
  icon: string;
  title: string;
  description: string;
}
@Component({
  selector: 'app-service-cards',
  imports: [CommonModule],
standalone: true,
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.scss'
})

export class ServiceCardsComponent {
  serviceCards: ServiceCard[] = [
    {
      icon: 'fa-solid fa-heart',
      title: 'Compatibility',
      description: 'Confused by love? Remove the doubts & find the spark! Check the compatibility with your partner using our tool and ignite a love that lasts forever.'
    },
    {
      icon: 'fa-solid fa-moon',
      title: 'Lunar Festivals 2025',
      description: 'Festivals are myriad celebrations, each a unique form of joy. Explore the diverse world of festivities – a realm of celebration guided by cosmic energies.'
    },
    {
      icon: 'fa-solid fa-star',
      title: 'Kundli Matching',
      description: 'Check Love Compatibility and Marriage Prediction online at AstroGem. Get the best Horoscope and kundli matching predictions today!'
    },
    {
      icon: 'fa-solid fa-dragon',
      title: 'Todays Horoscope',
      description: 'Are you a playful cat, a clever mouse, or a roaring lion? Discover your inner spirit animal with Todays astrology. Find out now!'
    }
  ];
}
