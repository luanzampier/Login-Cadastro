import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecordTable } from '../models/record-table';

@Injectable({
  providedIn: 'root',
})
export class RecordTableService {
  private urlApi: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  public usuarios(): Observable<RecordTable> {
    return this.http.get<RecordTable>(`${this.urlApi}clientes`).pipe(
      (res) => res,
      (error) => error
    );
  }

  public logarUsuario(login: string) {
    return this.http.get<RecordTable>(`${this.urlApi}clientes/${login}`).pipe(
      (res) => res,
      (error) => error
    );
  }
}
