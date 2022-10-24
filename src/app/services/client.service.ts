import { Injectable } from '@angular/core';
import {Observable, Subject} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Expert} from "../common/Expert";
import {baseUrl} from "../../environments/environment";
import {Assuree} from "../common/Assuree";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  observer = new Subject();
  public subscriber$ = this.observer.asObservable();
  constructor(private httpClient: HttpClient) { }


  getExpertsList(): Observable<Expert[]> {
    return this.httpClient.get<Expert[]>(baseUrl+'/utilisateur/Consultant/getAll',{
      withCredentials: true,
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*'
      })
    });
  }



  delete(id: any) {
    return this.httpClient.delete<string>(baseUrl+'/expert/delete/' + id,{
      withCredentials: true,
    })
  }

  getExpertById(id: string|null): Observable<Expert> {
    return this.httpClient.get<Expert>('http://localhost:8080/utilisateur/getConsultant/' + id,{
      withCredentials: true,
    });

  }

  editExpert(c: Expert): Observable<Expert> {

    return this.httpClient.put<Expert>('http://localhost:8080/utilisateur/edit/Consultant', c,{
      withCredentials: true,
    });
  }
  addAssuree(c: Assuree): Observable<Assuree> {

    return this.httpClient.post<Assuree>(baseUrl+'/ASSUREE-SERVICE/assuree/auth/signup', c,{
      withCredentials: true,
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin':'*'
      })
    });
  }
}
