import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioRequestDTO } from '../models/usuarioRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {

  constructor(private http: HttpClient) { }

  registrarEntrada(): Observable<number> {
    const usuarioRequestDTO: UsuarioRequestDTO = new UsuarioRequestDTO();
    usuarioRequestDTO.ip = 'abc';
    return this.http.post<number>('http://localhost:8080/usuario/post', usuarioRequestDTO)
  }

}



