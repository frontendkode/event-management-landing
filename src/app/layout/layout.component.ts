import { Component } from '@angular/core';
import { HeaderNavComponent } from "../header-nav/header-nav.component";
import { FooterNavComponent } from "../footer-nav/footer-nav.component";
import { RouterOutlet } from '@angular/router';
import { SharedcommonModule } from '../../shared/sharedcommon.module';
import { LandingComponent } from "../landing/landing.component";
import { SectionsComponent } from "../sections/sections.component";
import { OurServicesComponent } from "../our-services/our-services.component";

@Component({
  selector: 'app-layout',
  imports: [HeaderNavComponent, FooterNavComponent, RouterOutlet, SharedcommonModule, LandingComponent, SectionsComponent, OurServicesComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
