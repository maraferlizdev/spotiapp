import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//ng build --output-path docs --base-href /spotiapp/
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
   token= 'BQBLlpuSfCNTm7fKjCFIjMnHyNK4C2_760ZBBX6Q6teIbUS9kw1x3oH0yN6vqENzXh5NxFFuW5J1pehbsqmLO__edp3SG9AmlXdHHpg0TRuoP0qHVRA';

  constructor(private http: HttpClient) {
    console.log('Spotify service listo');
   }

   getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;
    const headers = new HttpHeaders({
      'Authorization':'Bearer '+this.token
    })

    return this.http.get(url,{headers});

   }

   getNewReleses(){
    return this.getQuery('browse/new-releases').pipe(map((data:any)=>{
      return data['albums'].items;
    }));
   }

   getArtistas(termino:string){

    /*return this.http.get(`https://api.spotify.com/v1/search?q=${termino} &type=artist&limit=20`, {headers}); */
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino} &type=artist&limit=20`, {headers}).pipe(map((data:any)=> data['artists'].items));
    return this.getQuery(`search?q=${termino} &type=artist&limit=20`).pipe(map((data:any)=> data['artists'].items));
   }
   //https://api.spotify.com/v1/artists/{id}

   getArtista(id:string){
    return this.getQuery(`artists/${id} `);
    //.pipe(map((data:any)=> data['artists'].items));
   }

   //https://api.spotify.com/v1/artists/{id}/top-tracks

   getTopTracksArtista(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe(map((data:any)=> data['tracks']))
   }
}
