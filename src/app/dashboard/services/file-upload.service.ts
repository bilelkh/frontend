// file-upload.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as XLSX from 'xlsx';
import {environment} from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  apiUrl = environment.apiUrl;
  constructor(
    private http: HttpClient
  ) { }

  // Read the Excel file and extract data
  readExcelFile(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        resolve(jsonData);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsArrayBuffer(file);
    });
  }

  insertData(data: any[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/kraken`, data)
  }


}
