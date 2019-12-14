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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5wdXQtc2VhcmNoLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lucHV0LWRlZXAtc2VhcmNoLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnB1dC1zZWFyY2gtZGlyZWN0aXZlL2lucHV0LXNlYXJjaC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3JGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFLeEM7SUFFRTtRQVFVLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQVI1QixDQUFDO0lBS2pCLHNCQUFJLDRDQUFVO2FBQWQsVUFBZSxXQUFXO1lBQ3hCLElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3RyxDQUFDOzs7T0FBQTtJQUlELDRDQUFhLEdBQWIsVUFBYyxLQUFLO1FBQ2pCLElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDM0MsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQzdFLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFDRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0Msd0NBQVMsR0FBVCxVQUFVLFdBQVcsRUFBRSxVQUFVLEVBQUUsY0FBYztRQUMvQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBRyxXQUFXLFlBQVksS0FBSyxFQUFFO1lBQzdCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN4QyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsVUFBVSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2FBQ3ZFO1NBQ0o7YUFFRDtZQUNJLEtBQUksSUFBSSxJQUFJLElBQUksV0FBVyxFQUFFO2dCQUN6QixJQUFHLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQzlCLElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyw2Q0FBNkMsRUFBRSxFQUFFLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEVBQUU7d0JBQ2hILE9BQU8sSUFBSSxDQUFDO3FCQUNmO2lCQUNKO2dCQUNELElBQUcsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLE1BQU0sSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksS0FBSztvQkFDeEUsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxjQUFjLENBQUMsQ0FBQzthQUM5RTtTQUNKO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQXRDa0I7UUFBbEIsS0FBSyxDQUFDLFVBQVUsQ0FBQzswREFBaUI7SUFDVjtRQUF4QixLQUFLLENBQUMsZ0JBQWdCLENBQUM7Z0VBQXVCO0lBRS9DO1FBREMsS0FBSyxDQUFDLFlBQVksQ0FBQzswREFHbkI7SUFDUztRQUFULE1BQU0sRUFBRTs4REFBbUM7SUFHNUM7UUFGQyxZQUFZLENBQUMsY0FBYyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEMsUUFBUSxFQUFFOzZEQVNaO0lBckJZLG9CQUFvQjtRQUhoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1NBQzdCLENBQUM7T0FDVyxvQkFBb0IsQ0EyQ2hDO0lBQUQsMkJBQUM7Q0FBQSxBQTNDRCxJQTJDQztTQTNDWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vZGVjb3JhdG9ycyc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thcHBJbnB1dFNlYXJjaF0nXG59KVxuZXhwb3J0IGNsYXNzIElucHV0U2VhcmNoRGlyZWN0aXZlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBzZWFyY2hUZXh0RGF0YTogc3RyaW5nOyBcbiAgQElucHV0KCdqc29uRGF0YScpIGpzb25EYXRhOiBhbnlbXTtcbiAgQElucHV0KCdkYXRhUHJvcGVydGllcycpIGRhdGFQcm9wZXJ0aWVzOiBhbnlbXTtcbiAgQElucHV0KCdzZWFyY2hUZXh0JylcbiAgc2V0IHNlYXJjaFRleHQoc2VhcmNoSW5wdXQpIHtcbiAgICB0aGlzLnNlYXJjaFRleHREYXRhID0gc2VhcmNoSW5wdXQucmVwbGFjZSgvW2B+IUAjJCVeJiooKV98K1xcLT0/OzonXCIsLjw+XFx7XFx9XFxbXFxdXFxcXFxcL10vZ2ksICcnKS50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIEBPdXRwdXQoKSBmaWx0ZXJlZERhdGEgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzprZXl1cCcsIFsnJGV2ZW50J10pXG4gIEBkZWJvdW5jZSgpIFxuICBvbklucHV0c2VhcmNoKGV2ZW50KSB7XG4gICAgbGV0IHJlc3VsdERhdGEgPSBbXTtcbiAgICBmb3IodmFyIGogPSAwOyBqPCB0aGlzLmpzb25EYXRhLmxlbmd0aCA7aisrKSB7XG4gICAgICBpZih0aGlzLmdldE9iamVjdCh0aGlzLmpzb25EYXRhW2pdLCB0aGlzLnNlYXJjaFRleHREYXRhLCB0aGlzLmRhdGFQcm9wZXJ0aWVzKSkge1xuICAgICAgICByZXN1bHREYXRhLnB1c2godGhpcy5qc29uRGF0YVtqXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyZWREYXRhLmVtaXQocmVzdWx0RGF0YSk7XG59XG4gIGdldE9iamVjdChpbnB1dE9iamVjdCwgc2VhcmNoRGF0YSwgZGF0YVByb3BlcnRpZXMpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICBpZihpbnB1dE9iamVjdCBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBpbnB1dE9iamVjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRPYmplY3QoaW5wdXRPYmplY3RbaV0sIHNlYXJjaERhdGEsIGRhdGFQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICBmb3IodmFyIHByb3AgaW4gaW5wdXRPYmplY3QpIHtcbiAgICAgICAgICAgIGlmKGRhdGFQcm9wZXJ0aWVzLmluY2x1ZGVzKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgaWYoaW5wdXRPYmplY3RbcHJvcF0ucmVwbGFjZSgvW2B+IUAjJCVeJiooKV98K1xcLT0/OzonXCIsLjw+XFx7XFx9XFxbXFxdXFxcXFxcL10vZ2ksICcnKS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaERhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGlucHV0T2JqZWN0W3Byb3BdIGluc3RhbmNlb2YgT2JqZWN0IHx8IGlucHV0T2JqZWN0W3Byb3BdIGluc3RhbmNlb2YgQXJyYXkpXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRPYmplY3QoaW5wdXRPYmplY3RbcHJvcF0sIHNlYXJjaERhdGEsIGRhdGFQcm9wZXJ0aWVzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iXX0=