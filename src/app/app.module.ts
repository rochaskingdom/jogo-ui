import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LutaListComponent } from './luta-list/luta-list.component';
import { LutaComponent } from './luta/luta.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { LutaService } from "./shared/api/luta.service";

@NgModule({
  declarations: [
    AppComponent,
    LutaListComponent,
    LutaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatTableModule
  ],
  providers: [LutaService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
