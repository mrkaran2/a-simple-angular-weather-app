import { Component, OnInit, ViewEncapsulation, Input} from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DisplayComponent implements OnInit {
  @Input() city: string;
  @Input() temp: number;
  @Input() feel: string;
  @Input() description: string;

  ngOnInit() {
  }
  constructor() {
  }

  getsrc() {
    if (this.temp == null) { return '/assets/default.png'; }
    if ( this.temp > 30) {return '/assets/sunny.png'; }
     if ( this.temp > 10 && this.temp <= 30) {return '/assets/warm.png'; }
     if ( this.temp <= 10) { return '/assets/snowy.png'; }
  }

}
