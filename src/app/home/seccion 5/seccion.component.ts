import { Component, Input } from '@angular/core';
import { ContactInformation, contactInformation } from 'src/app/service/info-person';

@Component({
  selector: 'app-seccion',
  templateUrl: './seccion.component.html',
  styleUrls: ['./seccion.component.scss']
})
export class SeccionComponent {
  personDateList: string[] = [contactInformation.mail, contactInformation.linkedinProfile]
  redesSociales: ContactInformation = contactInformation
  @Input() puedeVerPersonalData: boolean = false
}
