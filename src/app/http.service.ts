import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpService {
    API_KEY = '';
    CITY = '';
    constructor(private httpClient: HttpClient) {

    }
    sendRequest(city: string, api = this.API_KEY) {
        if (city === '' || city === undefined) { city = 'jalandhar'; }
        this.CITY = city;
        return this.httpClient
            .get(`https://api.weatherbit.io/v2.0/current?city=${this.CITY}&key=${api}`);
    }
}
