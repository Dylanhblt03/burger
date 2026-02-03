import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../services/article-service'; 
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-hot-deal-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hot-deal-component.html',
  styleUrl: './hot-deal-component.scss',
})
export class HotDealComponent implements OnInit {
  private articleService = inject(ArticleService);
  private sanitizer = inject(DomSanitizer);
  
  hotDeal: any = null;

  ngOnInit() {
    this.articleService.getArticleById(3).subscribe({
      next: (data) => {
        this.hotDeal = data;
      },
      error: (err) => console.error('Erreur lors de la récupération du Hot Deal:', err)
    });
  }

  getFormattedTitle(text: string): SafeHtml {
    if (!text) return '';
    const formatted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}