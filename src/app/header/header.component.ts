import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isFixedHeader: boolean = false;

  // Listen to the window scroll event
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: any) {
    if (window.pageYOffset > 50) { // Change 50 to whatever scroll position you want
      this.isFixedHeader = true;
    } else {
      this.isFixedHeader = false;
    }
  }
}
