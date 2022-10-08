import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../../services/heroes.service';

interface Heroes {
  name: string;
  appearance:Appearance;
  powerstats: Powerstats;
  image: Image;
}
interface Appearance {
  eyeColor: string;
  gender: string;
  hairColor: string;
  height: string[];
  race: string;
  weight: string[];
}
interface  Powerstats {
  combat: string [];
  durability: string [];
  intelligence: string [];
  power: string [];
  speed: string [];
  strength: string [];
}

interface Image {
  url:string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
  mat-card{
    margin-top:20px;
  }`
  ]
})
export class ListComponent implements OnInit {
heroes: Heroes[] = [];
search: string = '';
  constructor(private apiHeroes:HeroesService) { }

  ngOnInit(): void {
    this.apiHeroes.getHeroes('batman').subscribe((data) => {
      this.heroes=data.results
console.log(this.heroes);
    })
  }
  filter(event:any) {
    this.apiHeroes.getHeroes(event).subscribe((data) => {
      this.heroes=data.results
          })
        }
      }
