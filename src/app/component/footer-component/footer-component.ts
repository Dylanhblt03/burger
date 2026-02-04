import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticleService } from '../../services/article-service';
import { FooterService } from '../../services/footer-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './footer-component.html',
  styleUrl: './footer-component.scss'
})
export class FooterComponent implements OnInit {
  private articleService = inject(ArticleService);
  private footerService = inject(FooterService);
  private cdr = inject(ChangeDetectorRef);

  footerData: any = null;
  email: string = '';
  isSubmitted: boolean = false;

  ngOnInit() {
    this.articleService.getArticleById(7).subscribe({
      next: (data) => {
        this.footerData = data;
        this.cdr.detectChanges(); 
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    if (this.email && !this.isSubmitted) {
      this.footerService.subscribe(this.email).subscribe({
        next: () => {
          this.isSubmitted = true;
          this.cdr.detectChanges();
        }
      });
    }
  }
}