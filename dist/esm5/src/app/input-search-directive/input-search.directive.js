import * as tslib_1 from "tslib";
import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { debounce } from './decorators';
var InputSearchDirective = /** @class */ (function () {
    function InputSearchDirective() {
        this.filteredData = new EventEmitter();
    }
    Object.defineProperty(InputSearchDirective.prototype, "searchText", {
        set: function (searchInput) {
            this.searchTextData = searchInput.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase();
        },
        enumerable: true,
        configurable: true
    });
    InputSearchDirective.prototype.onInputsearch = function (event) {
        var resultData = [];
        for (var j = 0; j < this.jsonData.length; j++) {
            if (this.getObject(this.jsonData[j], this.searchTextData, this.dataProperties)) {
                resultData.push(this.jsonData[j]);
            }
        }
        this.filteredData.emit(resultData);
    };
    InputSearchDirective.prototype.getObject = function (inputObject, searchData, dataProperties) {
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
    return InputSearchDirective;
}());
export { InputSearchDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lucHV0LWRlZXAtc2VhcmNoLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnB1dC1zZWFyY2gtZGlyZWN0aXZlL2lucHV0LXNlYXJjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLeEM7SUFFRTtRQVFVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVI1QixDQUFDO0lBS2pCLHNCQUFJLDRDQUFVO2FBQWQsVUFBZSxXQUFXO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RyxDQUFDOzs7T0FBQTtJQUlELDRDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzdFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Msd0NBQVMsR0FBVCxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYztRQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBRyxXQUFXLFlBQVksS0FBSyxFQUFFO1lBQzdCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3ZFO1NBQ0o7YUFFRDtZQUNJLEtBQUksSUFBSSxJQUFJLElBQUksV0FBVyxFQUFFO2dCQUN6QixJQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzlCLElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ2hILE9BQU8sSUFBSSxDQUFDO3FCQUNmO2lCQUNKO2dCQUNELElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLE1BQU0sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSztvQkFDeEUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUM5RTtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQXRDa0I7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzswREFBaUI7SUFDVjtRQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7Z0VBQXVCO0lBRS9DO1FBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzswREFHbkI7SUFDUztRQUFULE1BQU0sRUFBRTs4REFBbUM7SUFHNUM7UUFGQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsUUFBUSxFQUFFOzZEQVNaO0lBckJZLG9CQUFvQjtRQUhoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1NBQzdCLENBQUM7T0FDVyxvQkFBb0IsQ0EyQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnLi9kZWNvcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2FwcElucHV0U2VhcmNoXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIElucHV0U2VhcmNoRGlyZWN0aXZlIHtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuICBzZWFyY2hUZXh0RGF0YTogc3RyaW5nOyBcclxuICBASW5wdXQoJ2pzb25EYXRhJykganNvbkRhdGE6IGFueVtdO1xyXG4gIEBJbnB1dCgnZGF0YVByb3BlcnRpZXMnKSBkYXRhUHJvcGVydGllczogYW55W107XHJcbiAgQElucHV0KCdzZWFyY2hUZXh0JylcclxuICBzZXQgc2VhcmNoVGV4dChzZWFyY2hJbnB1dCkge1xyXG4gICAgdGhpcy5zZWFyY2hUZXh0RGF0YSA9IHNlYXJjaElucHV0LnJlcGxhY2UoL1tgfiFAIyQlXiYqKClffCtcXC09Pzs6J1wiLC48Plxce1xcfVxcW1xcXVxcXFxcXC9dL2dpLCAnJykudG9Mb3dlckNhc2UoKTtcclxuICB9XHJcbiAgQE91dHB1dCgpIGZpbHRlcmVkRGF0YSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6a2V5dXAnLCBbJyRldmVudCddKVxyXG4gIEBkZWJvdW5jZSgpIFxyXG4gIG9uSW5wdXRzZWFyY2goZXZlbnQpIHtcclxuICAgIGxldCByZXN1bHREYXRhID0gW107XHJcbiAgICBmb3IodmFyIGogPSAwOyBqPCB0aGlzLmpzb25EYXRhLmxlbmd0aCA7aisrKSB7XHJcbiAgICAgIGlmKHRoaXMuZ2V0T2JqZWN0KHRoaXMuanNvbkRhdGFbal0sIHRoaXMuc2VhcmNoVGV4dERhdGEsIHRoaXMuZGF0YVByb3BlcnRpZXMpKSB7XHJcbiAgICAgICAgcmVzdWx0RGF0YS5wdXNoKHRoaXMuanNvbkRhdGFbal0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbHRlcmVkRGF0YS5lbWl0KHJlc3VsdERhdGEpO1xyXG59XHJcbiAgZ2V0T2JqZWN0KGlucHV0T2JqZWN0LCBzZWFyY2hEYXRhLCBkYXRhUHJvcGVydGllcykge1xyXG4gICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcbiAgICBpZihpbnB1dE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGlucHV0T2JqZWN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0T2JqZWN0KGlucHV0T2JqZWN0W2ldLCBzZWFyY2hEYXRhLCBkYXRhUHJvcGVydGllcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZVxyXG4gICAge1xyXG4gICAgICAgIGZvcih2YXIgcHJvcCBpbiBpbnB1dE9iamVjdCkge1xyXG4gICAgICAgICAgICBpZihkYXRhUHJvcGVydGllcy5pbmNsdWRlcyhwcm9wKSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaW5wdXRPYmplY3RbcHJvcF0ucmVwbGFjZSgvW2B+IUAjJCVeJiooKV98K1xcLT0/OzonXCIsLjw+XFx7XFx9XFxbXFxdXFxcXFxcL10vZ2ksICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaERhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaW5wdXRPYmplY3RbcHJvcF0gaW5zdGFuY2VvZiBPYmplY3QgfHwgaW5wdXRPYmplY3RbcHJvcF0gaW5zdGFuY2VvZiBBcnJheSlcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZ2V0T2JqZWN0KGlucHV0T2JqZWN0W3Byb3BdLCBzZWFyY2hEYXRhLCBkYXRhUHJvcGVydGllcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxuICB9XHJcbn1cclxuIl19