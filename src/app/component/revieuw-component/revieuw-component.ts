import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReviewService } from '../../services/review-service';
import { register } from 'swiper/element/bundle';

register();

@Component({
  selector: 'app-revieuw-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revieuw-component.html',
  styleUrl: './revieuw-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RevieuwComponent implements OnInit {
  private reviewService = inject(ReviewService);
  private cdr = inject(ChangeDetectorRef);

  reviews: any[] = [];

  ngOnInit() {
    this.reviewService.getReviews().subscribe({
      next: (data) => {
        this.reviews = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }
}