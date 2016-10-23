import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const URL_JSON = 'app/grids/griditems.json';

@Injectable()
export class WellDataService {

   constructor(private _http: Http) { }

    getItems(){
        return this._http.get(URL_JSON)
        .map((response: Response) => response.json());
    }

}
