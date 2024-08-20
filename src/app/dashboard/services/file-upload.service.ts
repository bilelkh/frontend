// file-upload.service.ts
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor() { }

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
}
