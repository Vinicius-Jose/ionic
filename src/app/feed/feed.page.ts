import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})

@NgModule({
	providers: [
		MovieService,
	  ],
})


export class FeedPage implements OnInit {
	public nome_usuario:string = "Vinícius José Code";
	public  objeto_feed = {
		titulo:"McFly",
		data: "November 5, 1955",
		descricao: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
		likes: 13,
		comentarios: 4,
		time_comment: "12h ago"
	};
	public lista_filmes = new Array<any>();



  constructor(private movieService: MovieService) { }

  
  
  public somaDoisNumeros(num1:number, num2:number):void{
	alert(num1+num2);
  
  }
  
  
  
  ngOnInit() {
	 // this.somaDoisNumeros(5,2);
	 this.movieService.getLatestMovies().subscribe(
		 data=>{
			 this.lista_filmes = (data as any).results ;
		 },error=>{
			 console.log(error);
		 }
	 );

  }

}
