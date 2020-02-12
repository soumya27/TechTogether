import {Component, Input, OnInit} from '@angular/core';
import {Vines} from '../model/vines';
import {VineService} from '../services/vine.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  @Input() vineChild: Array<Vines>;
  vineService: VineService;
  constructor(vineService: VineService) {
    this.vineService = vineService;
  }

  ngOnInit() {
    this.vineService.getVines().subscribe(
      vineData => {
        this.vineChild = vineData;
      },
      (error) => {
        if (error.status === -1) {
          console.log('Error status -1');
        }
        console.log('Failed to fetch vine Data');
        console.log(error);
      }
    );
  }
}
