import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor(
    private gifService: GifsService,
  ) { }

  search() {

    const value = this.txtSearch.nativeElement.value;
    if( value.trim().length === 0) {
      return;
    }
    this.gifService.searchGif( value );
    this.txtSearch.nativeElement.value = '';
  }

}
