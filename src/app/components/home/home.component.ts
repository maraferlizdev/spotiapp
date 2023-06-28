
import { Component } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  
  nuevasCanciones:any[]=[];
  loading:boolean;
  error:boolean;
  errorMessage:string='';
  
  constructor(private spotify:SpotifyService) {
    this.error=false;
    this.loading=true;
    this.spotify.getNewReleses().subscribe((data:any)=>{
      //console.log(data);
      this.nuevasCanciones=data;
      this.loading=false;
      },(errorServicio)=>{
        this.loading=false;
        this.error=true;
        console.log(errorServicio.error.error.message);
        this.errorMessage=errorServicio.error.error.message;
        
      });
    
  }

}
