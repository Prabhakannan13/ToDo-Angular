import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-tododata',
  templateUrl: './tododata.component.html',
  styleUrls: ['./tododata.component.css']
})
export class TododataComponent implements OnInit {

  constructor(private myapi:ApiService) {
    this.fetchData()
   }
   fetchData=()=>{
    this.myapi.viewTodo().subscribe(
      (data)=>{
        this.tododata=data
      }
    )
   }

  tododata:any={}

  ngOnInit(): void {
  }

}
