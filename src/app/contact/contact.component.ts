import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  onSubmit() {
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const message = (document.getElementById('message') as HTMLTextAreaElement).value;

    if (name && email && message) {
      window.open(`mailto:yassingharianipro@gmail.com?subject=Contact from ${name}&body=${message} (Email: ${email})`);

      // Clear the input fields
      (document.getElementById('name') as HTMLInputElement).value = '';
      (document.getElementById('email') as HTMLInputElement).value = '';
      (document.getElementById('message') as HTMLTextAreaElement).value = '';
    }
  }
}
