import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {
  public baseUrl = environment.api;

  constructor(private http: HttpClient) { }
  getList(): Observable<[]> {
    return this.http.get<[]>(this.baseUrl+"/package/all");
   }
 
   createList(CustomerCus: Object): Observable<Object> {
    debugger;
    return this.http.post(`${this.baseUrl}`, CustomerCus);
  }
  deleteList(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/package/delete/${id}`, { responseType: 'text' });
  }
  updateList(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }
   //updatedetails
   getupdateList(id: number): Observable<any> {
   return this.http.get(`${this.baseUrl}/${id}`);


}

}


