import { Component, OnInit } from '@angular/core';
import { LutaService } from "../shared/api/luta.service";
import { Luta } from "../shared/model/luta";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: 'app-luta-list',
  templateUrl: './luta-list.component.html',
  styles: []
})
export class LutaListComponent implements OnInit {

  dataSource: MatTableDataSource<Luta>;
  displayedColumns: string[] = ['codigo', 'lutaData', 'nomeVencedor', 'nomePerpededor'];

  constructor(private lutaService: LutaService) {
    this.dataSource = new MatTableDataSource<Luta>();
    this.dataSourceEvento(lutaService);
  }

  ngOnInit() {
    this.buscaTodasLutas();
  }

  buscaTodasLutas(): void {
    this.lutaService.buscaTodasLutas().subscribe(lutas => {
      this.dataSource.data = lutas.reverse();
    });
  }

  dataSourceEvento(lutaService: LutaService): void {
    lutaService.emitter.subscribe(luta => {
      const data = this.dataSource.data;
      data.unshift(luta);
      this.dataSource.data = data;
    })
  }
}
