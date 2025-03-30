import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Astrologer {
  id: number;
  name: string;
  specialty: string;
  image: string;
}
@Component({
  selector: 'app-astrologers',
  imports: [CommonModule],
standalone: true,
  templateUrl: './astrologers.component.html',
  styleUrl: './astrologers.component.scss'
})
export class AstrologersComponent {
  astrologers: Astrologer[] = [
    {
      id: 1,
      name: 'Jayant',
      specialty: 'Vedic Astrology',
      image: 'https://www.claudeusercontent.com/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'Vvinod',
      specialty: 'Vedic Astrology',
      image: 'https://www.claudeusercontent.com/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'Rachna',
      specialty: 'Numerology',
      image: 'https://www.claudeusercontent.com/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'Sanjeev',
      specialty: 'Vedic Astrology',
      image: 'https://www.claudeusercontent.com/api/placeholder/300/300'
    },
  ];
}
