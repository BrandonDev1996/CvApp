import { Component } from '@angular/core';
import { person } from './service/info-person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'Software Developer';
  person = person;

}
