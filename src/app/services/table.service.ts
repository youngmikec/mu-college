import { Injectable } from '@angular/core';
import { throwError, Observable, Subject, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiService, EnvService } from './index';

@Injectable({
    providedIn: 'root'
})

export class TableService {
    initialRecords: Array<any> = [];
    private records = new BehaviorSubject <any> (this.initialRecords);

    constructor(
        private apiService: ApiService,
        private env: EnvService,
    ){}

    add(item: any){
        this.initialRecords.push();
        this.setRecords(this.initialRecords);
    }

    setRecords(data: any){
        this.records.next(data);
    }

    getRecords(): Observable<any>{
        return this.records.asObservable();
    }
    
    // async recordRetrieve(queryString: string = '' ): Promise<any> {
    //     const url = `https://json-generator.com/#`;
    //     const proRes = this.apiService.getApi(url).pipe(
    //         map((res: any) => {
    //         console.log(res);
    //         // if (res.success && res.payload.length > 0) {
    //         //     res.payload.forEach((element: any) => {
    //         //     this.add(element);
    //         //     });
    //         // } else {
    //         //     throwError(res.message);
    //         // }
    //         return res;
    //         }));
    //     return await proRes.toPromise();
    // }
    async recordRetrieve(urlString: string = '', queryString: string = '' ): Promise<any> {
        const url = `${this.env.API_URL}/${urlString}${queryString}`;
        const proRes = this.apiService.getApi(url).pipe(
          map((res: any) => {
            console.log(res);
            if (res.success && res.payload.length > 0) {
              res.payload.forEach((element: any) => {
                this.add(element);
              });
            } else {
              throwError(res.message);
            }
            return res;
          }));
        return await proRes.toPromise();
      }
}