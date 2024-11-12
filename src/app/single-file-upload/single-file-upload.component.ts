import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadService } from '../services/upload.service'; // Import the UploadService

@Component({
  selector: 'app-single-file-upload',
  templateUrl: './single-file-upload.component.html',
  styleUrls: ['./single-file-upload.component.css'],
  standalone: true,  // Ensure standalone mode is enabled
  imports: [CommonModule], // Add CommonModule here
})
export class SingleFileUploadComponent {
  selectedFile: File | null = null; // Allowing 'null' as an initial value
  uploadStatus: string = 'waiting';

  constructor(private uploadService: UploadService) {}

  handleFileSelection(event: any) {
    this.selectedFile = event.target.files[0];
    console.log('Selected file:', this.selectedFile);
  }

  uploadFile() {
    if (this.selectedFile) {
      this.uploadStatus = 'inProgress';

      this.uploadService.uploadFile(this.selectedFile).subscribe({
        next: () => {
          this.uploadStatus = 'completed';
        },
        error: () => {
          this.uploadStatus = 'error';
        }
      });
    } else {
      alert("Please select a file before uploading.");
    }
  }
}

