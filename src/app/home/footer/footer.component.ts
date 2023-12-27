import { Component } from '@angular/core';
import { ContactInformation, contactInformation } from 'src/app/service/info-person';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  redesSociales:ContactInformation = contactInformation

}
