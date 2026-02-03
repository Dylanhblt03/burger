import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../services/menu-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser'; 

@Component({
  selector: 'app-menu-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-component.html',
  styleUrl: './menu-component.scss'
})
export class MenuComponent implements OnInit {
  articleHero: any = {
    title: '',
    subTitle: '',
    imgPath: '',
    libelle_lien: '',
    href_lien: '#'
  };

  constructor(
    private menuService: MenuService, 
    private sanitizer: DomSanitizer 
  ) {}

  ngOnInit() {
    this.menuService.getArticle(1).subscribe({
      next: (data) => {
        this.articleHero = data;
        console.log('Données reçues :', this.articleHero);
      },
      error: (err) => console.error('Erreur :', err)
    });
  }

  getFormattedTitle(text: string): SafeHtml {
    if (!text) return '';
    const formatted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}