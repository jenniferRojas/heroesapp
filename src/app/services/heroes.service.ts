import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

//endpoint
export class HeroesService {

  private api_heroes= "https://www.superheroapi.com/api/819725215833755/search/";

  constructor(private http: HttpClient) {
}
getHeroes(name="") {

  return this.http.get<any>(this.api_heroes+name);
}

}
