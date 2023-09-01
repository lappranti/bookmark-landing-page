import { Component, HostListener, OnInit } from '@angular/core';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isMenuVisible: boolean = false;

  ngOnInit(): void {
    this.handleSelectTab('tab1');
  }

  handleToggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  handleSelectTab(currentSelectedId: string) {
    const nextSelectedTab = document.querySelector('.select');
    const nextActiveContent = document.querySelector('.active') as HTMLElement;
    if (nextSelectedTab?.getAttribute('id') != currentSelectedId) {
      const currentSelectedTab = document.getElementById(currentSelectedId);
      const currentActiveContent = document.querySelector(
        '.' + currentSelectedId
      );

      nextSelectedTab?.classList.remove('select');
      nextActiveContent?.classList.remove('active');

      currentSelectedTab?.classList.add('select');
      currentActiveContent?.classList.add('active');
    }
  }

  handleToggleQuestio(idQuestion: string) {
    const question = document.getElementById(idQuestion);
    question?.classList.toggle('select');
    question?.nextElementSibling?.classList.toggle('select');
  }

  showGoToTopButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    // Afficher ou masquer le bouton en fonction de la position de défilement
    this.showGoToTopButton = window.scrollY > 100; // à partir de 100 pixels de défilement
  }

  scrollToTop() {
    // Faire défiler la page vers le haut de manière fluide
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
