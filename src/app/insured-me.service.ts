
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpEvent } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable()
export class InsuredMeService {
  private url = 'https://www.insuredmine.xyz/api/api/mailCampaigns/dummyApi';
  private storage = sessionStorage;
  // private Options = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // }
  constructor(
    private http: HttpClient


  ) {
    console.log('## InsuredMeService service created');


  }

  insuredData(): Observable<any> {


    console.log('## inside insuredData')

    if (this.storage.getItem('DATA')) {
      return of(JSON.parse(this.storage.getItem('DATA')));
    }

    return this.http.get(this.url).pipe(

      tap((data) => {

        console.log('## inside tap')
        console.log(data);
        this.storage.setItem('DATA', JSON.stringify(data));

      }),
      
    )



  }
}
