import { Component, OnInit } from '@angular/core';
import { LutaService } from "../shared/api/luta.service";
import { Lutas } from "../shared/model/lutas";

@Component({
  selector: 'app-luta',
  templateUrl: './luta.component.html'
})
export class LutaComponent implements OnInit {

  lutas: Lutas = new Lutas();
  vencedor: String;

  constructor(private lutaService: LutaService) {
  }

  ngOnInit() {
    this.novaLuta();
  }

  luta() {
    this.lutaService.resultadoLuta(this.lutas).subscribe(
      luta => {
        this.lutaService.novaLuta(luta);
        this.vencedor = luta.nomeVencedor;
      }
    );
  }

  novaLuta() {
    this.vencedor = null;
    this.lutaService.buscaLutaAleatoria().subscribe(lutas => this.lutas = lutas);
  }
}
