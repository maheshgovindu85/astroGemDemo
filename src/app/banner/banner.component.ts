import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
interface services {
  title: string;
  icon: SafeHtml;
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
         icon: this.sanitizeSvg( `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="pink">
                  <path d="M21 2H3a2 2 0 00-2 2v14a2 2 0 002 2h4l5 4 5-4h4a2 2 0 002-2V4a2 2 0 00-2-2zm-3 9h-4v2h-4v-2H6V8h4V6h4v2h4v3z"/>
                </svg>`)
      },
      {
        title: 'Talk to Astrologer',
         icon: this.sanitizeSvg( `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="teal">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.07-.24 10.05 10.05 0 003.14.51 1 1 0 011 1V21a1 1 0 01-1 1 19 19 0 01-19-19 1 1 0 011-1h3.5a1 1 0 011 1 10.05 10.05 0 00.51 3.14 1 1 0 01-.24 1.07l-2.2 2.2z"/>
                </svg>`)
      },
      {
        title: 'Astromall Shop',
         icon: this.sanitizeSvg( `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="blue">
                  <path d="M3 3h18a1 1 0 011 1v2a3 3 0 01-3 3h-1v11a1 1 0 01-1 1h-10a1 1 0 01-1-1v-11h-1a3 3 0 01-3-3v-2a1 1 0 011-1zm4 6h10v10h-10v-10zm-2-4v1a1 1 0 001 1h12a1 1 0 001-1v-1h-14z"/>
                </svg>`)
      },
      {
        title: 'Book A Pooja',
         icon: this.sanitizeSvg( `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" fill="orange">
                  <path d="M12 2C10.9 2 10 2.9 10 4V6H14V4C14 2.9 13.1 2 12 2zM6 6V4H4V6H2V8H4V10H6V8H8V6H6zM21 11H19V13H21V11zM21 15H19V17H21V15zM18 8H16V10H18V8zM12 8C7.03 8 2 9.79 2 12C2 14.21 7.03 16 12 16C16.97 16 22 14.21 22 12C22 9.79 16.97 8 12 8z"/>
                </svg>`)
      }
    ];
  }
 

  sanitizeSvg(svg: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(svg);
  }
}
