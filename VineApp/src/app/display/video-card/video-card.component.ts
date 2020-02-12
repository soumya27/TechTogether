import { Component, OnInit, Input} from '@angular/core';
import {Vines} from '../../model/vines';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.css']
})
export class VideoCardComponent implements OnInit {
  @Input() vine: Vines;
  classObject: object = {
    vine: true ? 'vine' : ''
  };
  constructor() { }

  ngOnInit() {
  }

}
