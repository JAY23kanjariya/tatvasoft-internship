import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FormsModule,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  // Properties (interpolated in the template)
  title = 'Angularproject';
  // name = 'Jay Kanjariya';
  // visible = false;

  // list = ["Angular", "React", "Vue", "Svelte", "Ember", "Backbone", "jQuery", "Bootstrap", "Tailwind CSS"];

  // store = ''

  // onLogin() {
  //   this.visible = !this.visible;
  //   console.log(`Login status: ${this.store}`);
  // }


  // login form
  username = '';
  password = '';
  visible = false;

  onLogin() {
    this.visible = !this.visible;
    console.log(`Username: ${this.username}, Password: ${this.password}`);
  }
}
