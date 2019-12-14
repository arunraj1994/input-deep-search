import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { debounce } from './decorators';
let InputSearchDirective = class InputSearchDirective {
    constructor() {
        this.filteredData = new EventEmitter();
    }
    set searchText(searchInput) {
        this.searchTextData = searchInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
    }
    onInputsearch(event) {
        let resultData = [];
        for (var j = 0; j < this.jsonData.length; j++) {
            if (this.getObject(this.jsonData[j], this.searchTextData, this.dataProperties)) {
                resultData.push(this.jsonData[j]);
            }
        }
        this.filteredData.emit(resultData);
    }
    getObject(inputObject, searchData, dataProperties) {
        var result = null;
        if (inputObject instanceof Array) {
            for (var i = 0; i < inputObject.length; i++) {
                result = this.getObject(inputObject[i], searchData, dataProperties);
            }
        }
        else {
            for (var prop in inputObject) {
                if (dataProperties.includes(prop)) {
                    if (inputObject[prop].replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase().includes(searchData)) {
                        return true;
                    }
                }
                if (inputObject[prop] instanceof Object || inputObject[prop] instanceof Array)
                    result = this.getObject(inputObject[prop], searchData, dataProperties);
            }
        }
        return result;
    }
};
tslib_1.__decorate([
    Input('jsonData')
], InputSearchDirective.prototype, "jsonData", void 0);
tslib_1.__decorate([
    Input('dataProperties')
], InputSearchDirective.prototype, "dataProperties", void 0);
tslib_1.__decorate([
    Input('searchText')
], InputSearchDirective.prototype, "searchText", null);
tslib_1.__decorate([
    Output()
], InputSearchDirective.prototype, "filteredData", void 0);
tslib_1.__decorate([
    HostListener('window:keyup', ['$event']),
    debounce()
], InputSearchDirective.prototype, "onInputsearch", null);
InputSearchDirective = tslib_1.__decorate([
    Directive({
        selector: '[appInputSearch]'
    })
], InputSearchDirective);
export { InputSearchDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lucHV0LWRlZXAtc2VhcmNoLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnB1dC1zZWFyY2gtZGlyZWN0aXZlL2lucHV0LXNlYXJjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLeEMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFFL0I7UUFRVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFSNUIsQ0FBQztJQUtqQixJQUFJLFVBQVUsQ0FBQyxXQUFXO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RyxDQUFDO0lBSUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDN0UsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkM7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxjQUFjO1FBQy9DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFHLFdBQVcsWUFBWSxLQUFLLEVBQUU7WUFDN0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDdkU7U0FDSjthQUVEO1lBQ0ksS0FBSSxJQUFJLElBQUksSUFBSSxXQUFXLEVBQUU7Z0JBQ3pCLElBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDOUIsSUFBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLDZDQUE2QyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDaEgsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7Z0JBQ0QsSUFBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksTUFBTSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLO29CQUN4RSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzlFO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTtBQXZDb0I7SUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQztzREFBaUI7QUFDVjtJQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7NERBQXVCO0FBRS9DO0lBREMsS0FBSyxDQUFDLFlBQVksQ0FBQztzREFHbkI7QUFDUztJQUFULE1BQU0sRUFBRTswREFBbUM7QUFHNUM7SUFGQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsUUFBUSxFQUFFO3lEQVNaO0FBckJZLG9CQUFvQjtJQUhoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7R0FDVyxvQkFBb0IsQ0EyQ2hDO1NBM0NZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICcuL2RlY29yYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwSW5wdXRTZWFyY2hdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5wdXRTZWFyY2hEaXJlY3RpdmUge1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG4gIHNlYXJjaFRleHREYXRhOiBzdHJpbmc7IFxyXG4gIEBJbnB1dCgnanNvbkRhdGEnKSBqc29uRGF0YTogYW55W107XHJcbiAgQElucHV0KCdkYXRhUHJvcGVydGllcycpIGRhdGFQcm9wZXJ0aWVzOiBhbnlbXTtcclxuICBASW5wdXQoJ3NlYXJjaFRleHQnKVxyXG4gIHNldCBzZWFyY2hUZXh0KHNlYXJjaElucHV0KSB7XHJcbiAgICB0aGlzLnNlYXJjaFRleHREYXRhID0gc2VhcmNoSW5wdXQucmVwbGFjZSgvW2B+IUAjJCVeJiooKV98K1xcLT0/OzonXCIsLjw+XFx7XFx9XFxbXFxdXFxcXFxcL10vZ2ksICcnKS50b0xvd2VyQ2FzZSgpO1xyXG4gIH1cclxuICBAT3V0cHV0KCkgZmlsdGVyZWREYXRhID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgQGRlYm91bmNlKCkgXHJcbiAgb25JbnB1dHNlYXJjaChldmVudCkge1xyXG4gICAgbGV0IHJlc3VsdERhdGEgPSBbXTtcclxuICAgIGZvcih2YXIgaiA9IDA7IGo8IHRoaXMuanNvbkRhdGEubGVuZ3RoIDtqKyspIHtcclxuICAgICAgaWYodGhpcy5nZXRPYmplY3QodGhpcy5qc29uRGF0YVtqXSwgdGhpcy5zZWFyY2hUZXh0RGF0YSwgdGhpcy5kYXRhUHJvcGVydGllcykpIHtcclxuICAgICAgICByZXN1bHREYXRhLnB1c2godGhpcy5qc29uRGF0YVtqXSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuZmlsdGVyZWREYXRhLmVtaXQocmVzdWx0RGF0YSk7XHJcbn1cclxuICBnZXRPYmplY3QoaW5wdXRPYmplY3QsIHNlYXJjaERhdGEsIGRhdGFQcm9wZXJ0aWVzKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuICAgIGlmKGlucHV0T2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgaW5wdXRPYmplY3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRPYmplY3QoaW5wdXRPYmplY3RbaV0sIHNlYXJjaERhdGEsIGRhdGFQcm9wZXJ0aWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKHZhciBwcm9wIGluIGlucHV0T2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmKGRhdGFQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICBpZihpbnB1dE9iamVjdFtwcm9wXS5yZXBsYWNlKC9bYH4hQCMkJV4mKigpX3wrXFwtPT87OidcIiwuPD5cXHtcXH1cXFtcXF1cXFxcXFwvXS9naSwgJycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpbnB1dE9iamVjdFtwcm9wXSBpbnN0YW5jZW9mIE9iamVjdCB8fCBpbnB1dE9iamVjdFtwcm9wXSBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRPYmplY3QoaW5wdXRPYmplY3RbcHJvcF0sIHNlYXJjaERhdGEsIGRhdGFQcm9wZXJ0aWVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH1cclxufVxyXG4iXX0=