import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  names = [ 
    "Ana", "Claudio", "José", "Paulo"
  ]

  cities = [
    {name: "São Paulo", State: "SP"}, 
    {name: "Vitória", State: "ES"}, 
    {name: "Ipatinga", State: "MG"}, 
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
