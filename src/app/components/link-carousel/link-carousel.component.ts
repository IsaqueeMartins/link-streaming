import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-link-carousel',
  imports: [NgOptimizedImage],
  templateUrl: './link-carousel.component.html',
  styleUrl: './link-carousel.component.css',
})
export class LinkCarouselComponent {
  abrirLinkExterno(url: string): void {
    window.open(url, '_blank');
  }
}
