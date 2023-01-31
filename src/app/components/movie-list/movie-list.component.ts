import {Component, OnInit} from '@angular/core';
import {Movie} from "../../common/movie";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})

export class MovieListComponent implements OnInit {
// creamos el array donde guardaremos las películas
// que traigamos de la API REST
  movies: Movie[] = [];
// inyectamos el servicio para poder utilizarlo
  constructor(private movieService: MovieService) { }
// en el ngOnInit es donde se ponen las
// funciones que queremos ejecutar cuando se
// inicie este componente
// en nuestro caso queremos que se lean las películas
  ngOnInit(): void {
    this.listMovies();
  }

// Y definimos la función que carga los restaurantes
// que la hemos llamado desde el ngOnInit
  listMovies(): void {

// llamamos a la función del servicio que tiene
// las películas y nos subscribimos a ella
// Así nos mantiene la información actualizada
    this.movieService.getMovieList().subscribe(
// recogemos la respuesta de la subscripción
// en una variable llamada data
      (data: any) => {
// guardamos la respuesta en nuestro array de Movie
        this.movies = data;
      }
    );
  }

}
