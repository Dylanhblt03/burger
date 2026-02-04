import { Component, OnInit, OnDestroy, HostListener, ChangeDetectorRef } from '@angular/core';
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
export class MenuComponent implements OnInit, OnDestroy {
  articleHero: any = {
    title: '',
    subTitle: '',
    imgPath: '',
    libelle_lien: '',
    href_lien: '#'
  };

  activeSection: string = 'home';
  sections: string[] = ['home', 'about', 'menu', 'hotdeals', 'contact'];

  constructor(
    private menuService: MenuService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.menuService.getArticle(1).subscribe({
      next: (data) => {
        this.articleHero = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Erreur :', err)
    });
  }

  ngOnDestroy() {}

  @HostListener('window:scroll', [])
  onScroll() {
    const scrollPosition = window.scrollY + 100;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const offsetTop = element.offsetTop;
        const offsetHeight = element.offsetHeight;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          this.activeSection = section;
          break;
        }
      }
    }
  }

  scrollTo(event: Event, sectionId: string) {
    event.preventDefault();
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  getFormattedTitle(text: string): SafeHtml {
    if (!text) return '';
    const formatted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}