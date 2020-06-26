import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InstructionService {

  private baseUrl = 'http://localhost:8080/api/instructions/';

  constructor(private http: HttpClient) { }

  getInstruction(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createInstruction(instruction: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, instruction);
  }

  updateInstruction(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteInstruction(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getInstructionsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
