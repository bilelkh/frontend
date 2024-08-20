import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './services/file-upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  loading = false;
  chunkSize = 10;
  constructor(
 private fileUploadService: FileUploadService
  ) { }


  ngOnInit() {

    }


  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileUploadService.readExcelFile(file).then((data: any[]) => {
        this.data = data;
      });
    }
  }

  upload() {
    //send as chunks to the server to avoid timeout
    this.loading = true;
    this.fileUploadService.sendChunks(this.data, this.chunkSize).subscribe({
      next: (response) => {
        this.loading = true;
        console.log('Chunk sent successfully', response);
      },
      error: (error) => {
        this.loading = false;
        console.error('Error sending chunk', error);
      },
      complete: () => {
        this.loading = false;
        console.log('All chunks sent');
      }
    });



  }
}
