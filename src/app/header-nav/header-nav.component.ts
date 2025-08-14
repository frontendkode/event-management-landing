import { Component, HostListener } from '@angular/core';
import { SharedcommonModule } from '../../shared/sharedcommon.module';

@Component({
  selector: 'app-header-nav',
  imports: [SharedcommonModule],
  templateUrl: './header-nav.component.html',
  styleUrl: './header-nav.component.scss'
})
export class HeaderNavComponent {
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }
  // menuOpen = false;
  // headerScrolled = false;

  // toggleNavbar(): void {
  //   this.menuOpen = !this.menuOpen;
  // }

  // @HostListener('window:scroll', [])
  // onWindowScroll(): void {
  //   this.headerScrolled = window.scrollY >= 75;
  //   const header = document.getElementById('header');
  //   if (header) {
  //     if (this.headerScrolled) {
  //       header.classList.add('on-scroll');
  //     } else {
  //       header.classList.remove('on-scroll');
  //     }
  //   }
  // }

  // @HostListener('window:resize', [])
  // onResize(): void {
  //   if (window.innerWidth >= 768) {
  //     this.menuOpen = false;
  //   }
  // }
}
