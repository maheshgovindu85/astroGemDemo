import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface Statistic {
  value: string;
  label: string;
  icon: string;
}
@Component({
  selector: 'app-statistics',
  imports: [CommonModule],
standalone: true,
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss'
})
export class StatisticsComponent {
  statistics: Statistic[] = [
    {
      value: '43,208+',
      label: 'Verified Astrologers',
      icon: 'fa-solid fa-user-check'
    },
    {
      value: '1,326 Million',
      label: 'Minutes of Cosmic Guidance',
      icon: 'fa-solid fa-clock'
    },
    {
      value: '88.2 Million',
      label: 'Satisfied Clients Worldwide',
      icon: 'fa-solid fa-globe'
    }
  ];
}
