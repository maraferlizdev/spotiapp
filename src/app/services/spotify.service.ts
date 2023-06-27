import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

//ng build --output-path docs --base-href /spotiapp/
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  
   token= 'BQBKKmMmwd4BQCcTuXCz6l4bXxIjrPfy8g-kylicepyHQfLJImxUK3nBt_um2ruJ6WtCOY8uRFhoZ6eh98aI9DLlTOLnwahFTLM9QUg9yvdJ3UrBRUxG6Xbq6rcAuMvWtkkgyOfWgW8OykgGOXXRaWa3yN2hN8eIpC5HTEV3QJJ5aoS_hytzxBz_NyE9EwCCY5nF-JpgmElaisalbnzDVv0dx8_ZYCYZ8-dgMUBQCbltRHoz-fDqkBXYMnFnV7VMnIIPuInYDF-w8GZpljZzHYMHIK9aam7rwW7gi4Hw1Lmmju6Sd7GiVFenLzGMSogt8RMa_Tfk2OrkgshrJ3h7ratww';

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
