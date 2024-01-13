import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Receipe, ReceipeWithIngredsDTO } from '../model/receipe';
import { Observable } from 'rxjs';


@Injectable({providedIn: 'root'})

export class ReceipeService {
  private receipesUrl: string;
  private addReceipeUrl: string;
  private updateReceipeUrl: string;

  constructor(private http: HttpClient) {
    this.receipesUrl = 'http://localhost:8080/receipes';
    this.addReceipeUrl = 'http://localhost:8080/add_receipe';
    this.updateReceipeUrl = 'http://localhost:8080/update/receipe';
  }

  public findAll(): Observable<ReceipeWithIngredsDTO[]> {
    return this.http.get<ReceipeWithIngredsDTO[]>(this.receipesUrl);
  }

  public getRecipe(id: number): Observable<ReceipeWithIngredsDTO> {
    /* let params = new HttpParams();
    params = params.append('name', name); */
    let getReceipeUrl = `http://localhost:8080/receipe/${id}`;
    return this.http.get<ReceipeWithIngredsDTO>(getReceipeUrl);
  }


  public save(receipe: ReceipeWithIngredsDTO): Observable<ReceipeWithIngredsDTO> {
    return this.http.post<ReceipeWithIngredsDTO>(this.addReceipeUrl, receipe);
  }

  public deleteRecipe(id: number): Observable<Receipe> {
    let deleteReceipeUrl = `http://localhost:8080/delete/receipe/${id}`;
    return this.http.delete<Receipe>(deleteReceipeUrl);
  }

  public updateRecipe(receipe:Receipe): Observable<Receipe> {
    return this.http.put<Receipe>(this.updateReceipeUrl, receipe);
  }

}
