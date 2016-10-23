import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

const URL_JSON = 'app/grids/griditems.json';

@Injectable()
export class WellDataService {

   constructor(private _http: Http) { }

    getItems(){
        return this._http.get(URL_JSON)
        .map((response: Response) => response.json())
        .catch(this._handleError);
    }

    _handleError(err: any){
      //Note that err will catch a 404 because the json will be empty.
      console.log(err);
      return Observable.throw(err);
    }

}
