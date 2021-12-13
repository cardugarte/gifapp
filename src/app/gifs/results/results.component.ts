import { Component, OnInit } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    private gifService: GifsService,
  ) { }

  get results() {
    return this.gifService.results;
  }

  ngOnInit(): void {
  }

}
