import { Component } from '@angular/core';
import { SingleFileUploadComponent } from './single-file-upload/single-file-upload.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [SingleFileUploadComponent, RouterModule] // Import your standalone component here
})
export class AppComponent {
  title = 'file-upload-app';
}

