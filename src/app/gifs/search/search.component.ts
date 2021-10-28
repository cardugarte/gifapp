import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @ViewChild('txtSearch') txtSearch!: ElementRef<HTMLInputElement>;

  constructor() { }

  search() {

    const value = this.txtSearch.nativeElement.value;
    console.log( value );
    this.txtSearch.nativeElement.value = '';
  }

}
