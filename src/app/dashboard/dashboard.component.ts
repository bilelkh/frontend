import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './services/file-upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(
 private fileUploadService: FileUploadService
  ) { }

  ngOnInit(): void {
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileUploadService.readExcelFile(file).then((data: any[]) => {
        this.uploadData(data);
      });
    }
  }

  uploadData(data: any[]) {
    console.log('Data to be uploaded:', data);
    /*this.http.post('http://localhost:3000/upload', data).subscribe(response => {
      console.log('Data uploaded successfully!', response);
    });*/
  }
}
