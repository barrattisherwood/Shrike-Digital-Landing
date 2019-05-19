import { ConnectionService } from '../../services/connection.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-email-box',
  templateUrl: './email-box.component.html',
  styleUrls: ['./email-box.component.scss']
})
export class EmailBoxComponent {

  contactForm: FormGroup;
  disabledSubmitButton = true;
  optionsSelect: Array<any>;
  
  @HostListener('input') oninput() {

  if (this.contactForm.valid) {
    this.disabledSubmitButton = false;
    }
  }

  constructor(private fb: FormBuilder, private connectionService: ConnectionService) { }

  onSubmit() {
    this.connectionService.sendMessage(this.contactForm.value).subscribe(() => {
      alert('Your message has been sent.');
      this.contactForm.reset();
      this.disabledSubmitButton = true;
    }, error => {
      console.log('Error', error);
    });
  }

}
