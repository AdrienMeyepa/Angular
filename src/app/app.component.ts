import { Component } from '@angular/core';
//The compnonent decorator contains the Meta Deta and the template that represnet the view
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Welcome to ADRIEN Angular';
}
