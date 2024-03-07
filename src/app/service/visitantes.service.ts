import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioRequestDTO } from '../models/UsuarioRequestDTO';
import { Observable } from 'rxjs';

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



