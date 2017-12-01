import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
	selector: 'app-left',
	templateUrl: './left.component.html',
	styleUrls: ['./left.component.css']
})
export class LeftComponent implements OnInit {

	groups:[object];
	constructor(private dataService: DataService) { }

	ngOnInit() {
		this.dataService.getData().subscribe(data => {
			console.log(data.groups);
			this.groups = data.groups;
		});
	}

	showGroupDetail(group:object) {
		console.log(group);
		this.dataService.publishCurrentGroupData(group);
	}

}
