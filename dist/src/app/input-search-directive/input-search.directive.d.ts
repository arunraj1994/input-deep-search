import { EventEmitter } from '@angular/core';
export declare class InputSearchDirective {
    constructor();
    searchTextData: string;
    jsonData: any[];
    dataProperties: any[];
    searchText: any;
    filteredData: EventEmitter<any>;
    onInputsearch(event: any): void;
    getObject(inputObject: any, searchData: any, dataProperties: any): any;
}
