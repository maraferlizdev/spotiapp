import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//ng build --output-path docs --base-href /spotiapp/
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
   token= 'BQBCFY0QwHJbtgtOnoxRlxxPlFOx5d4JECul_yEXGLm1RTtkbHXMj4pzZ5vIPBmryyQPsYE7Vgc5bDkN7D9Baz5CYCEmoWGuZOkhasis0q_Jvr7xLwU';

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

   getArtista(termino:string){


    /*return this.http.get(`https://api.spotify.com/v1/search?q=${termino} &type=artist&limit=20`, {headers}); */
    // return this.http.get(`https://api.spotify.com/v1/search?q=${termino} &type=artist&limit=20`, {headers}).pipe(map((data:any)=> data['artists'].items));
    return this.getQuery(`search?q=${termino} &type=artist&limit=20`).pipe(map((data:any)=> data['artists'].items));
   }
}
