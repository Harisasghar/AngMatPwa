import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private endpoint: string = "https://www.metaweather.com/api/";
  constructor(private httpClient: HttpClient) { }

  private setHeaders(): HttpHeaders {
    let headersConfig: any;

    headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      // 'Access-Control-Allow-Origin': '*'
    };
    return new HttpHeaders(headersConfig);
  }

  private get(path: string, httpParams: HttpParams = new HttpParams()): Observable<any> {
    const url = this.endpoint + path;
    return this.httpClient.get(url, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }), params: httpParams
    });
  }

  locationSearch(location: string): Observable<any> {
    let params = new HttpParams().set('query', location);
    return this.get("location/search/", params);
  }
  
  locationDetails(locationId: string): Observable<any> {
    return this.get("location/"+locationId);
  }
  locationAndDate(locationId: string, date: string): Observable<any> {
    return this.get("location/"+locationId+"/"+date);
  }
}

// https://dog.ceo/dog-api/documentation/
// https://openlibrary.org/dev/docs/api/search
// http://api.population.io/
// https://github.com/Hipo/university-domains-list
// https://en.wikipedia.org/w/api.php?action=help&modules=opensearch
// https://www.metaweather.com/api/#locationsearch