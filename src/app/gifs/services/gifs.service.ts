import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Gif, SearchGifResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _history: string[] = [];
  private apiKey: string = 'ZSQ8mKVXzholQmH08MX0HG7o3i7OyAWk';
  private urlBase: string = 'https://api.giphy.com/v1/gifs';
  public results: Gif[] = [];

  constructor(
    private http: HttpClient,
  ) {

    //Almacenar images:
    this.results = JSON.parse(localStorage.getItem('images')!) || [];

    //Almacenar info en LocalStorage:
    this._history = JSON.parse(localStorage.getItem('history')!) || [];

    // this._history = localStorage.getItem('history');

    // if(localStorage.getItem('history')) {
    //   this._history = JSON.parse(localStorage.getItem('history')!);
    // }
  }

  get history() {
    return [...this._history];
  }

  searchGif(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._history.includes( query )){
      this._history.unshift( query );
      this._history = this._history.splice(0,10);

      localStorage.setItem('history', JSON.stringify(this._history));
    };

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http.get<SearchGifResponse>(`${this.urlBase}/search`, { params })
      .subscribe((resp) => {
      this.results = resp.data;
      localStorage.setItem('images', JSON.stringify(this.results));
    })

  }

}
