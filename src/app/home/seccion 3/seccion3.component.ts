import { Component, Input } from '@angular/core';
import { technologies } from 'src/app/service/info-person';

@Component({
  selector: 'app-seccion3',
  templateUrl: './seccion3.component.html',
  styleUrls: ['./seccion3.component.scss']
})
export class Seccion3Component {

  @Input() tecnologies = technologies
}

