import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { debounce } from './decorators';

@Directive({
  selector: '[appInputSearch]'
})
export class InputSearchDirective {

  constructor() { }
  searchTextData: string; 
  @Input('jsonData') jsonData: any[];
  @Input('dataProperties') dataProperties: any[];
  @Input('searchText')
  set searchText(searchInput) {
    this.searchTextData = searchInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
  }
  @Output() filteredData = new EventEmitter();
  @HostListener('window:keyup', ['$event'])
  @debounce() 
  onInputsearch(event) {
    let resultData = [];
    for(var j = 0; j< this.jsonData.length ;j++) {
      if(this.getObject(this.jsonData[j], this.searchTextData, this.dataProperties)) {
        resultData.push(this.jsonData[j]);
      }
    }
    this.filteredData.emit(resultData);
}
  getObject(inputObject, searchData, dataProperties) {
    var result = null;
    if(inputObject instanceof Array) {
        for(var i = 0; i < inputObject.length; i++) {
            result = this.getObject(inputObject[i], searchData, dataProperties);
        }
    }
    else
    {
        for(var prop in inputObject) {
            if(dataProperties.includes(prop)) {
                if(inputObject[prop].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase().includes(searchData)) {
                    return true;
                }
            }
            if(inputObject[prop] instanceof Object || inputObject[prop] instanceof Array)
                result = this.getObject(inputObject[prop], searchData, dataProperties);
        }
    }
    return result;
  }
}
