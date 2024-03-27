import { Component, Input, OnInit } from '@angular/core';
import { UsuarioRequestDTO } from 'src/app/models/usuarioRequestDTO';
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
  inputValue: string = ''
  constructor(private visitantesSrv: VisitantesService) { }

  ngOnInit() {
  }

  saveInput() {
    const usuarioRequestDTO: UsuarioRequestDTO = new UsuarioRequestDTO();
    usuarioRequestDTO.ip = this.inputValue;
    this.visitantesSrv.registrarEntrada(usuarioRequestDTO).subscribe(visitasCount => {
      this.visitas = visitasCount;
      this.mostrarLuz = true;
      this.loading = false;
    })
  }
}