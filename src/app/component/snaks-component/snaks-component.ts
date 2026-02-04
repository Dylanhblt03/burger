import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategorieService } from '../../services/categorie-service';

@Component({
  selector: 'app-snaks-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snaks-component.html',
  styleUrl: './snaks-component.scss'
})
export class SnaksComponent implements OnInit {
  snacks: any[] = [];

  constructor(private categorieService: CategorieService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.categorieService.getAllCategories().subscribe({
      next: (data) => {
        this.snacks = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Erreur API snacks:', err);
      }
    });
  }

  getImagePath(nom: string): string {
    const mapping: { [key: string]: string } = {
      'FOOD': 'burger-button.png',
      'SNACK': 'fries-button.png',
      'DRINKS': 'drinks-button.png'
    };
    return mapping[nom.toUpperCase()] || 'burger-button.png';
  }

  getSubtitle(nom: string): string {
    const subtitles: { [key: string]: string } = {
      'FOOD': 'To fill you up',
      'SNACK': 'For little and big hungers',
      'DRINKS': 'To quench your thirst'
    };
    return subtitles[nom.toUpperCase()] || '';
  }
}