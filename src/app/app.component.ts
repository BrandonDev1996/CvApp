import { Component, OnInit } from '@angular/core';
import { PersonInfo, person } from './service/info-person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  person: PersonInfo = person
  puedeVerInfo: boolean = false
  pass: string = ':)'

  ngOnInit(): void {
  }

  login(pass: string): void{
    this.pass = pass;
    if(this.pass === 'gdee123'){
      this.puedeVerInfo = true;
    }

  }

  validCode(): boolean{
      if(this.pass === 'gdee123' || this.pass === ':)'){
        return false
      }else{
        return true
      }
  }



}

