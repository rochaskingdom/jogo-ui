import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Luta } from '../model/luta';
import { Lutas } from '../model/lutas';

@Injectable()
export class LutaService {

  @Output() emitter = new EventEmitter<Luta>();
  protected basePath = 'http://localhost:8080';

  constructor(protected httpClient: HttpClient) {
    if (!window.location.host.includes("localhost")) {
      this.basePath = window.location.protocol + "//" + window.location.host;
    }
  }

  public buscaTodasLutas(): Observable<any> {
    return this.httpClient.get<Array<Luta>>(`${this.basePath}/lutas`);
  }

  public novaLuta(fight: Luta) {
    this.emitter.emit(fight);
  }

  public resultadoLuta(lutas: Lutas): Observable<any> {
    return this.httpClient.post<any>(`${this.basePath}/lutas`, lutas);
  }

  public buscaLutaAleatoria(): Observable<any> {
    return this.httpClient.get<Lutas>(`${this.basePath}/lutas/aleatorio`);
  }

}
