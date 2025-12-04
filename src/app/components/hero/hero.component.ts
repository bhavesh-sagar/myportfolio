import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  scrollToContact(event: Event) {
    event.preventDefault();
    const contact = document.getElementById('contact');
    contact?.scrollIntoView({ behavior: 'smooth' });
  }
}
