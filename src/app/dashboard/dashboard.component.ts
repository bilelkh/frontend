import { Component, OnInit } from '@angular/core';
import { FileUploadService } from './services/file-upload.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data: any[] = [];
  constructor(
 private fileUploadService: FileUploadService
  ) { }


  ngOnInit() {

    }


  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.fileUploadService.readExcelFile(file).then((data: any[]) => {
        console.log(data);
        this.data = data;
      });
    }
  }

  upload() {
    this.fileUploadService.insertData(this.data).subscribe((response) => {
    }, (error) => {
      console.error('Error:', error);
    });
  }
}
