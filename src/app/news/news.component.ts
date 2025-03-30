import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface NewsPost {
  id: number;
  title: string;
  image: string;
  author: string;
  date: string;
  views: number;
}
@Component({
  selector: 'app-news',
  imports: [CommonModule],
standalone: true,
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  newsPosts: NewsPost[] = [
    {
      id: 1,
      title: 'Find Your Guardian Angel According to Your Zodiac Sign',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      author: 'Astrologer Aakanksha',
      date: 'March 25, 2025',
      views: 31568
    },
    {
      id: 2,
      title: '5 Zodiac Signs That Get Annoyed Easily by Others',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      author: 'Priyanka Kumari',
      date: 'March 24, 2025',
      views: 15950
    },
    {
      id: 3,
      title: '8 Zodiac Signs That Never Give Up on Their Dreams',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      author: 'Astrologer Ankush',
      date: 'March 24, 2025',
      views: 18249
    },
    {
      id: 4,
      title: '4 Zodiac Signs with the Highest IQ, According to Astrology',
      image: 'https://www.claudeusercontent.com/api/placeholder/400/250',
      author: 'Tania Bhardwaj',
      date: 'March 24, 2025',
      views: 20749
    }
  ];
}
