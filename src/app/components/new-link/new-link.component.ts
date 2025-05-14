import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NewLinkLocalStorageService } from '../../services/new-link-local-storage.service';

@Component({
  selector: 'app-new-link',
  imports: [],
  templateUrl: './new-link.component.html',
  styleUrl: './new-link.component.css',
})
export class NewLinkComponent implements OnInit {
  @Output() fechar = new EventEmitter<void>();

  url: string = '';
  nome: string = '';
  linksSalvos: { url: string; nome: string }[] = [];

  constructor(private storage: NewLinkLocalStorageService) {}

  ngOnInit(): void {
    this.linksSalvos = this.storage.obterLinks();
  }

  criarNovoLink() {
    if (!this.url || !this.nome) {
      return;
    }

    this.storage.salvarLink({ url: this.url, nome: this.nome });
    this.linksSalvos = this.storage.obterLinks();

    this.url = '';
    this.nome = '';
  }

  onCancelar() {
    this.fechar.emit();
  }
}
