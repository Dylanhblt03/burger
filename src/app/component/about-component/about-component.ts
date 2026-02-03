import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleService } from '../../services/article-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-component.html',
  styleUrl: './about-component.scss'
})
export class AboutUsComponent implements OnInit {
  private articleService = inject(ArticleService);
  private sanitizer = inject(DomSanitizer);

  aboutData: any = null;

  ngOnInit() {
    this.articleService.getArticleById(2).subscribe({
      next: (data) => this.aboutData = data,
      error: (err) => console.error('Erreur About Us:', err)
    });
  }

  getFormattedTitle(text: string): SafeHtml {
    if (!text) return '';
    const formatted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}