import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>{{ text }}</p>
    <p>{{ text | lowercase }}</p>
    <p>{{ text | uppercase }}</p>
    <p>{{ text | titlecase }}</p>
    <p>{{ text | slice:3 }}</p>
    <p>{{ text | slice:3:5 }}</p>
    <p>{{ myjson | json }}</p>
    <p>{{ 3.142 | number:'1.2-3' }}</p>
    <p>{{ 3.142 | number:'3.2-3' }}</p>
    <p>{{ 3.142 | number:'3.4-5' }}</p>

    <p>{{ 0.25 | percent }}</p>

    <p>{{ 250 | currency }}</p>
    <p>{{ 250 | currency: 'INR' }}</p>
    <p>{{ 250 | currency: 'INR':'code' }}</p>

    <p>{{ mydate }}</p>
    <p>{{ mydate | date:'short' }}</p>
    <p>{{ mydate | date:'shortDate' }}</p>
    <p>{{ mydate | date:'shortTime' }}</p>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public text="Hello world"
  public myjson = {
    "key" : "heyyy",
    "value" : "buddy"
  }
  public mydate = new Date()
  constructor() { }

  ngOnInit(): void {
  }
}
