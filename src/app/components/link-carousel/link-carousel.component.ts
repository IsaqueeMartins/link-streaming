import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { NewLinkComponent } from '../new-link/new-link.component';

@Component({
  selector: 'app-link-carousel',
  imports: [NgOptimizedImage, NewLinkComponent, CommonModule],
  templateUrl: './link-carousel.component.html',
  styleUrl: './link-carousel.component.css',
})
export class LinkCarouselComponent {
  abrirLinkExterno(url: string): void {
    window.open(url, '_blank');
  }

  exibirFormulario: boolean = false;

  abrirCriacaoLink(): void {
    this.exibirFormulario = true;
  }
  fecharCriacaoLink(): void {
    this.exibirFormulario = false;
  }
}
