import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { map } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  artistas:any[]=[];
  loading:boolean;

  constructor(private spotify:SpotifyService) {
    this.loading=true;
  }
/*
  buscar(termino:string){
    this.spotify.getArtista(termino).subscribe((data:any)=>{console.log(data.artists.items);
    this.artistas=data.artists.items
    })
*/
  buscar(termino:string){
    this.spotify.getArtista(termino).subscribe((data:any)=>{console.log(data);
    this.artistas=data;
    this.loading=false;
    })
    

  }

}
