import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.scss']
})
export class PresentacionComponent {

  title = 'Software Developer';
  @Input()nombre:string = ''
  
  
}
