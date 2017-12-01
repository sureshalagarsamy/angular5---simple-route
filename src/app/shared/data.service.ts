import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUserInfo } from './data-structure';
import "rxjs/add/operator/map";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

	constructor(private http: HttpClient) { }

	private currentGroupObj = new Subject<object>();
	currentGroupObj$ = this.currentGroupObj.asObservable();

	publishCurrentGroupData(data: object) {
		this.currentGroupObj.next(data);
	}

	getData(): Observable<IUserInfo> {
		return this.http.get('https://api.myjson.com/bins/1etfxj').map((response: IUserInfo) => response)
	}
}
