import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
// bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// Graficos
import { ChartsModule } from 'ng2-charts';
import { LinearComponent } from './componentes/linear/linear.component';
import { BarrasComponent } from './componentes/barras/barras.component';
import { DonaComponent } from './componentes/dona/dona.component';
import { RadarComponent } from './componentes/radar/radar.component';
import { PieComponent } from './componentes/pie/pie.component';


@NgModule({
  declarations: [
    AppComponent,
    LinearComponent,
    BarrasComponent,
    DonaComponent,
    RadarComponent,
    PieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
