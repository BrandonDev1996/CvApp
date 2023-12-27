import { Component } from '@angular/core';
import { PersonInfo, person } from './service/info-person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  person:PersonInfo = person
}

