import { HeroesService } from './../../../services/heroes.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
    `.container{
      margin: 10px;
  }`
]
})
export class HomeComponent implements OnInit {

  constructor(private apiHeroes:HeroesService) { }

  ngOnInit(): void {
    this.apiHeroes.getHeroes().subscribe((data) => {
console.log(data);
    })
    console.log("pasa");
  }
filter(event:string) {
  this.apiHeroes.getHeroes().subscribe((data) => {
    console.log(data);
        })
}
}
