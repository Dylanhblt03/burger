import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliciousMenuService } from '../../services/delicious-menu-service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-delicious-menu-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delicious-menu-component.html',
  styleUrl: './delicious-menu-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeliciousMenuComponent implements OnInit {
  @ViewChild('swiperEl') swiperRef!: ElementRef;

  burgers: any[] = [];
  mainTitle: string = "OUR #DELICIOUS BURGERS";

  constructor(
    private menuService: DeliciousMenuService,
    private sanitizer: DomSanitizer,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.menuService.getBurgers().subscribe({
      next: (data) => {
        this.burgers = data;
        this.cdr.detectChanges();
        setTimeout(() => {
          this.initSwiper();
        }, 50);
      },
      error: (err) => console.error('Erreur lors de la récupération des burgers:', err)
    });
  }

  private initSwiper() {
    if (this.swiperRef && this.swiperRef.nativeElement) {
      const swiperEl = this.swiperRef.nativeElement;

      const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: true,
        pagination: false,
        loop: true,
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 40
          }
        },
      };
      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
      this.cdr.detectChanges();
    }
  }

  getFormattedTitle(text: string): SafeHtml {
    const formatted = text.replace(/(#\w+)/g, '<span class="hashtag">$1</span>');
    return this.sanitizer.bypassSecurityTrustHtml(formatted);
  }
}