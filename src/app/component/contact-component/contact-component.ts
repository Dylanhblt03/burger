import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleService } from '../../services/article-service';
import { ContactService } from '../../services/contact-service';

@Component({
  selector: 'app-contact-component',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss',
})
export class ContactComponent implements OnInit {
  private articleService = inject(ArticleService);
  private contactSrv = inject(ContactService);
  private cdr = inject(ChangeDetectorRef);
  private fb = inject(FormBuilder);

  contactForm: FormGroup;
  contactInfo: any = null;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  ngOnInit() {
    this.articleService.getArticleById(6).subscribe({
      next: (data) => {
        this.contactInfo = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error(err)
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactSrv.sendContact(this.contactForm.value).subscribe({
        next: (res) => {
          if (res.status === 'success') {
            alert('Message envoyé avec succès !');
            this.contactForm.reset();
            this.cdr.detectChanges();
          } else {
            alert("Erreur lors de l'envoi : " + (res.message || 'Données invalides'));
          }
        },
        error: (err) => {
          console.error(err);
          alert("Une erreur technique est survenue.");
        }
      });
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}