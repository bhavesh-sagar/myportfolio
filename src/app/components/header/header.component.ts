import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  active: string = 'home';
  isLight = false;

  scrollTo(section: string, event: Event) {
    event.preventDefault();
    this.active = section;
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => this.onWindowScroll(), 400);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const sections = ['home', 'projects', 'skills', 'about', 'contact'];
    const scrollPos = window.scrollY + 250;

    for (const section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const top = el.offsetTop - 120;
        const height = el.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          if (this.active !== section) this.active = section;
          break;
        }
      }
    }
  }

  toggleTheme() {
    this.isLight = !this.isLight;
    document.body.classList.toggle('theme-light', this.isLight);
  }
}