import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent {
  artista: any={};
  artistaTopTracks: any[]=[];
  loading: boolean;
  constructor(private router:ActivatedRoute,
              private spotify:SpotifyService) {
    this.loading=true;
    this.router.params.subscribe(params=>{
      //console.log(params);
      this.getArtista(params['id']);
      this.getTopTracksArtista(params['id']);
      
    });
  }
  getArtista(id:string){
    this.loading=true;
    this.spotify.getArtista(id).subscribe(artista=>{
      this.artista=artista;
      console.log(artista);
      this.loading=false;
    })
  }

  getTopTracksArtista(id:string){
    this.loading=true;
    this.spotify.getTopTracksArtista(id).subscribe(artistaTopTracks=>{
      this.artistaTopTracks=artistaTopTracks;
      console.log(artistaTopTracks);
      this.loading=false;
    })
  }

}
