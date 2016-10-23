import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_JSON = 'app/data/json/welldata.json';

@Injectable()
export class WellDataService {

   constructor(private _http: Http) { }

    getItems(){
        console.log("Getting Items");
        return this._http.get(URL_JSON)
        .map((response: Response) => response.json())
        .catch(this._handleError);
    }

    _handleError(err: any){
      //Note that err will catch a 404 because the json will be empty.
      console.log("Error getting items: " + err);
      return Observable.throw(err);
    }

}
