import { Component, OnInit, inject } from '@angular/core';
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
  private fb = inject(FormBuilder);

  contactForm: FormGroup;
  contactInfo: any = null;

  constructor() {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.articleService.getArticleById(6).subscribe(data => {
      this.contactInfo = data;
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactSrv.sendContact(this.contactForm.value).subscribe({
        next: (res) => {
          alert('Message envoyé !');
          this.contactForm.reset();
        },
        error: (err) => {
  
          console.error(err);
          alert("Erreur technique de connexion.");
        }
      });
    }
  }
}