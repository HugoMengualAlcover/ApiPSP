import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Movie} from "../common/movie";

export class MovieService {
  baseURL = 'http://localhost:3000/api/movies';
// Inyectamos el Cliente Http que nos
// permitirá reealizar peticiones Http a la API REST
  constructor(private http: HttpClient) { }
// Creamos la función que nos devolverá
// el array de Películas
  getMovieList(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.baseURL);
  }
}
