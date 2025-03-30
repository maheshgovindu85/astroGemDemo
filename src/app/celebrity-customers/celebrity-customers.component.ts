import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Celebrity {
  id: number;
  name: string;
  image: string;
  title: string;
}

@Component({
  selector: 'app-celebrity-customers',
  imports: [CommonModule],
standalone: true,
  templateUrl: './celebrity-customers.component.html',
  styleUrl: './celebrity-customers.component.scss'
})
export class CelebrityCustomersComponent {
  celebrities: Celebrity[] = [
    {
      id: 1,
      name: 'MANDIRA BEDI',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      title: `Secret of Mandira Bedi's success 👏`
    },
    {
      id: 2,
      name: 'SHWETA TIWARI',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      title: 'Shweta Tiwari has a message for you. Tap to watch 👇'
    },
    {
      id: 3,
      name: 'BHARTI SINGH',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      title: 'Bharti Singh never thought to come on television 👏'
    },
    {
      id: 4,
      name: 'RANBIR KAPOOR',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      title: 'Ranbir Kapoor talks about astrology'
    },
  ];
}
