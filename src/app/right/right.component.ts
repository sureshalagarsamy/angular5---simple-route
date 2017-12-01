import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css']
})
export class RightComponent implements OnInit {

  constructor(private dataService:DataService) { }
	currentGroup:object;

  ngOnInit() {
	  this.dataService.currentGroupObj$.subscribe(data=>{
		  this.currentGroup = data;
		  console.log(this.currentGroup);
	  })
  }

}
