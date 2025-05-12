import { Component, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-link',
  imports: [],
  templateUrl: './new-link.component.html',
  styleUrl: './new-link.component.css',
})
export class NewLinkComponent {
  @Output() fechar = new EventEmitter<void>();

  onCancelar() {
    this.fechar.emit();
  }
}
