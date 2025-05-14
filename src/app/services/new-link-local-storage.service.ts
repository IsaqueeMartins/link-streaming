import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NewLinkLocalStorageService {
  private readonly storageKey = 'listaLink';

  salvarLink(link: { url: string; nome: string }) {
    const lista = JSON.parse(localStorage.getItem(this.storageKey) || '[]');
    lista.push(link);
    localStorage.setItem(this.storageKey, JSON.stringify(lista));
  }

  obterLinks(): { url: string; nome: string }[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }
}
