import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Rx';

const URL_IWT = "../../../assets/data/quicklist.json";

@Injectable()
export class IwtDataService {
    constructor(private _http: Http) { }

    getQuickListItems(){
        return this._http.get(URL_IWT)
        .map((response: Response) => response.json());
    }

    getQuickListItemSettings(){
        console.log("In GetGridSettings")
        return this._http.get(URL_IWT)
        .map((response: Response) => response.json());
    }
}
