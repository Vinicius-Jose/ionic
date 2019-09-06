import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root' 
})
export class MovieService {
	private baseApiPath  = "https://api.themoviedb.org/3/";
	private key = "api_key=a5e03bab2b046c01727a5cc5699556bd&language=pt-BR"
  
  constructor(private http: HttpClient) { }
	
   getLatestMovies(){
	 return this.http.get(this.baseApiPath + "movie/popular?"+ this.key);
   }
  
}




