import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AstrologersComponent } from './astrologers/astrologers.component';
import { BannerComponent } from './banner/banner.component';
import { BlogSectionComponent } from './blog-section/blog-section.component';
import { CelebrityCustomersComponent } from './celebrity-customers/celebrity-customers.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NewsComponent } from './news/news.component';
import { SearchSectionComponent } from './search-section/search-section.component';
import { ServiceCardsComponent } from './service-cards/service-cards.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { WhyAstrologyComponent } from './why-astrology/why-astrology.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, BannerComponent, ServiceCardsComponent, StatisticsComponent, NewsComponent, BlogSectionComponent, CelebrityCustomersComponent, AstrologersComponent, WhyAstrologyComponent, FooterComponent, SearchSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'astroGem';
}
