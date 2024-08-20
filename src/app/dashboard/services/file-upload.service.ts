// file-upload.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import { environment } from '../../../environments/environment'
import { Observable, from } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
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



  sendChunks(data: any[], chunkSize: number): Observable<any> {
    const chunks = this.chunkArray(data, chunkSize);
    return from(chunks).pipe(
      concatMap((chunk) => this.http.post(`${this.apiUrl}/kraken`, chunk).pipe(delay(1000))) // Ajout d'un délai de 1 seconde entre chaque envoi
    );
  }

  private chunkArray(data: any[], chunkSize: number): any[][] {
    const results = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      results.push(data.slice(i, i + chunkSize));
    }
    return results;
  }


}
