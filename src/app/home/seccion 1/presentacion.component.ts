import { Component, Input, OnInit } from '@angular/core';
import { VisitantesService } from 'src/app/service/visitantes.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent implements OnInit {

  @Input() nombre: string = ''
  visitas: number = 0;
  mostrarLuz: boolean = false; 
  loading: boolean = true;
  constructor(private visitantesSrv: VisitantesService) { }

  ngOnInit() {
    this.visitantesSrv.registrarEntrada().subscribe(visitasCount => {
      this.visitas = visitasCount;
      this.mostrarLuz = true;
      this.loading = false;
    })

  }
}