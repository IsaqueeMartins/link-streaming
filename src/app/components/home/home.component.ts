import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { LinkCarouselComponent } from "../link-carousel/link-carousel.component";

@Component({
  selector: 'app-home',
  imports: [HeaderComponent, LinkCarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
