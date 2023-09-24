import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  downloadCV(){
    const cvFileURL = '/assets/Janhavi Dangche-Resume.pdf';
    const link = document.createElement('a');
    link.href = cvFileURL;
    link.download = 'Janhavi Dangche-Resume.pdf'; // Change the filename for the downloaded file
    link.click();
  }
}
