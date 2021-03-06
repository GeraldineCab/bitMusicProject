import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ConsultaPerfilService {
  private url = "http://localhost:3000/api/usuarios/";

  constructor(private http: HttpClient) {}

  getPerfilInformation(emailLog) {
    return this.http.get(this.url + emailLog);
  }
  actualizarImagen(email, nuevaImagen) {
    return this.http.put(this.url + email, nuevaImagen);
  }
  agregarFavorito(usuario, cancion) {
    console.log(usuario);
    console.log(this.url + "add/" + usuario);
    return this.http.put(this.url + "add/" + usuario, cancion);
  }
}
