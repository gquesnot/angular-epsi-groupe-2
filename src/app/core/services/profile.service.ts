import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {ProfileUpdateInterface} from '../interfaces/profileUpdate.interface';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private httpClient: HttpClient
  ) { }

  updateChanges(updateChanges: ProfileUpdateInterface): Observable<any> {
    return this.httpClient.patch(
      `${environment.api}/api/profile`,
      updateChanges
    );
  }

}
