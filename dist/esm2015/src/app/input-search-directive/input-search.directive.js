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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lucHV0LWRlZXAtc2VhcmNoLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnB1dC1zZWFyY2gtZGlyZWN0aXZlL2lucHV0LXNlYXJjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLeEMsSUFBYSxvQkFBb0IsR0FBakMsTUFBYSxvQkFBb0I7SUFFL0I7UUFRVSxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFSNUIsQ0FBQztJQUtqQixJQUFJLFVBQVUsQ0FBQyxXQUFXO1FBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RyxDQUFDO0lBSUQsYUFBYSxDQUFDLEtBQUs7UUFDakIsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRTtnQkFDN0UsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkM7U0FDRjtRQUNELElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDQyxTQUFTLENBQUMsV0FBVyxFQUFFLFVBQVUsRUFBRSxjQUFjO1FBQy9DLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQztRQUNsQixJQUFHLFdBQVcsWUFBWSxLQUFLLEVBQUU7WUFDN0IsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ3hDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLEVBQUUsY0FBYyxDQUFDLENBQUM7YUFDdkU7U0FDSjthQUVEO1lBQ0ksS0FBSSxJQUFJLElBQUksSUFBSSxXQUFXLEVBQUU7Z0JBQ3pCLElBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDOUIsSUFBRyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLDZDQUE2QyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTt3QkFDaEgsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7Z0JBQ0QsSUFBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksTUFBTSxJQUFJLFdBQVcsQ0FBQyxJQUFJLENBQUMsWUFBWSxLQUFLO29CQUN4RSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQzlFO1NBQ0o7UUFDRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0NBQ0YsQ0FBQTtBQXZDb0I7SUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQztzREFBaUI7QUFDVjtJQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7NERBQXVCO0FBRS9DO0lBREMsS0FBSyxDQUFDLFlBQVksQ0FBQztzREFHbkI7QUFDUztJQUFULE1BQU0sRUFBRTswREFBbUM7QUFHNUM7SUFGQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDeEMsUUFBUSxFQUFFO3lEQVNaO0FBckJZLG9CQUFvQjtJQUhoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO0tBQzdCLENBQUM7R0FDVyxvQkFBb0IsQ0EyQ2hDO1NBM0NZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9kZWNvcmF0b3JzJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2FwcElucHV0U2VhcmNoXSdcbn0pXG5leHBvcnQgY2xhc3MgSW5wdXRTZWFyY2hEaXJlY3RpdmUge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG4gIHNlYXJjaFRleHREYXRhOiBzdHJpbmc7IFxuICBASW5wdXQoJ2pzb25EYXRhJykganNvbkRhdGE6IGFueVtdO1xuICBASW5wdXQoJ2RhdGFQcm9wZXJ0aWVzJykgZGF0YVByb3BlcnRpZXM6IGFueVtdO1xuICBASW5wdXQoJ3NlYXJjaFRleHQnKVxuICBzZXQgc2VhcmNoVGV4dChzZWFyY2hJbnB1dCkge1xuICAgIHRoaXMuc2VhcmNoVGV4dERhdGEgPSBzZWFyY2hJbnB1dC5yZXBsYWNlKC9bYH4hQCMkJV4mKigpX3wrXFwtPT87OidcIiwuPD5cXHtcXH1cXFtcXF1cXFxcXFwvXS9naSwgJycpLnRvTG93ZXJDYXNlKCk7XG4gIH1cbiAgQE91dHB1dCgpIGZpbHRlcmVkRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleXVwJywgWyckZXZlbnQnXSlcbiAgQGRlYm91bmNlKCkgXG4gIG9uSW5wdXRzZWFyY2goZXZlbnQpIHtcbiAgICBsZXQgcmVzdWx0RGF0YSA9IFtdO1xuICAgIGZvcih2YXIgaiA9IDA7IGo8IHRoaXMuanNvbkRhdGEubGVuZ3RoIDtqKyspIHtcbiAgICAgIGlmKHRoaXMuZ2V0T2JqZWN0KHRoaXMuanNvbkRhdGFbal0sIHRoaXMuc2VhcmNoVGV4dERhdGEsIHRoaXMuZGF0YVByb3BlcnRpZXMpKSB7XG4gICAgICAgIHJlc3VsdERhdGEucHVzaCh0aGlzLmpzb25EYXRhW2pdKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5maWx0ZXJlZERhdGEuZW1pdChyZXN1bHREYXRhKTtcbn1cbiAgZ2V0T2JqZWN0KGlucHV0T2JqZWN0LCBzZWFyY2hEYXRhLCBkYXRhUHJvcGVydGllcykge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIGlmKGlucHV0T2JqZWN0IGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGlucHV0T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldE9iamVjdChpbnB1dE9iamVjdFtpXSwgc2VhcmNoRGF0YSwgZGF0YVByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIGZvcih2YXIgcHJvcCBpbiBpbnB1dE9iamVjdCkge1xuICAgICAgICAgICAgaWYoZGF0YVByb3BlcnRpZXMuaW5jbHVkZXMocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBpZihpbnB1dE9iamVjdFtwcm9wXS5yZXBsYWNlKC9bYH4hQCMkJV4mKigpX3wrXFwtPT87OidcIiwuPD5cXHtcXH1cXFtcXF1cXFxcXFwvXS9naSwgJycpLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoRGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYoaW5wdXRPYmplY3RbcHJvcF0gaW5zdGFuY2VvZiBPYmplY3QgfHwgaW5wdXRPYmplY3RbcHJvcF0gaW5zdGFuY2VvZiBBcnJheSlcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmdldE9iamVjdChpbnB1dE9iamVjdFtwcm9wXSwgc2VhcmNoRGF0YSwgZGF0YVByb3BlcnRpZXMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn1cbiJdfQ==