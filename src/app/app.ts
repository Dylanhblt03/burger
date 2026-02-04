import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AuthService } from './services/auth-service';
import { MenuComponent } from "./component/menu-component/menu-component";
import { SnaksComponent } from "./component/snaks-component/snaks-component";
import { AboutUsComponent } from './component/about-component/about-component';
import { HotDealComponent } from './component/hot-deal-component/hot-deal-component';
import { DeliciousMenuComponent } from './component/delicious-menu-component/delicious-menu-component';
import { RevieuwComponent } from './component/revieuw-component/revieuw-component';
import { VideoComponent } from './component/video-component/video-component';
import { ContactComponent } from './component/contact-component/contact-component';
import { FooterComponent } from './component/footer-component/footer-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MenuComponent, 
    SnaksComponent, 
    AboutUsComponent, 
    HotDealComponent, 
    DeliciousMenuComponent, 
    RevieuwComponent, 
    VideoComponent, 
    ContactComponent, 
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('burger-app');

  constructor(private authService: AuthService) {}

  ngOnInit() {}
}