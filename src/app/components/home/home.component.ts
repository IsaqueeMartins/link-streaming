import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LinkCarouselComponent } from "../link-carousel/link-carousel.component";
import { NewLinkComponent } from "../new-link/new-link.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LinkCarouselComponent, NewLinkComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
