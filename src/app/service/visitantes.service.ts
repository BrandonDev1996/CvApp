import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioRequestDTO } from '../models/usuarioRequestDTO';

@Injectable({
  providedIn: 'root'
})
export class VisitantesService {

  url = "https://cvappbackend.onrender.com"
  constructor(private http: HttpClient) { }

  registrarEntrada(usuario: UsuarioRequestDTO): Observable<number> {
    return this.http.post<number>(this.url + '/usuario/post', usuario)
  }

}



