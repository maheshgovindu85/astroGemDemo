import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule
@Component({
  selector: 'app-search-section',
  imports: [CommonModule, FormsModule],
  standalone: true,
  templateUrl: './search-section.component.html',
  styleUrl: './search-section.component.scss'
})
export class SearchSectionComponent {
  searchQuery: string = '';
  categories: string[] = ['Vedic Astrology', 'Numerology', 'Tarot Reading', 'Palmistry', 'Vastu Shastra', 'Face Reading'];
  selectedCategory: string = '';
  
  onSearch() {
    console.log('Searching for:', this.searchQuery, 'in category:', this.selectedCategory);
    // Implement search functionality
  }
}
