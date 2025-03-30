import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
interface services {
  title: string;
  icon: string;
}
@Component({
  selector: 'app-banner',
  imports: [CommonModule],
standalone: true,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss'
})
export class BannerComponent {

  services :services[]
  constructor(private sanitizer: DomSanitizer) {
    this.services = [
      {
        title: 'Chat with Astrologer',
         icon: 'fa-solid fa-brands fa-rocketchat'
      },
      {
        title: 'Talk to Astrologer',
         icon: 'fa-solid fa-phone-volume'
      },
      {
        title: 'Astromall Shop',
         icon: 'fa-solid fa-calendar-check'
      },
      {
        title: 'Book A Pooja',
         icon: 'fa-solid fa-gopuram'
      }
    ];
  }
 

  sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
