import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, HostListener, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

function debounce(delay) {
    if (delay === void 0) { delay = 700; }
    return function (target, propertyKey, descriptor) {
        var timeout = null;
        var original = descriptor.value;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timeout);
            timeout = setTimeout(function () { return original.apply(_this, args); }, delay);
        };
        return descriptor;
    };
}

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
    __decorate([
        Input('jsonData')
    ], InputSearchDirective.prototype, "jsonData", void 0);
    __decorate([
        Input('dataProperties')
    ], InputSearchDirective.prototype, "dataProperties", void 0);
    __decorate([
        Input('searchText')
    ], InputSearchDirective.prototype, "searchText", null);
    __decorate([
        Output()
    ], InputSearchDirective.prototype, "filteredData", void 0);
    __decorate([
        HostListener('window:keyup', ['$event']),
        debounce()
    ], InputSearchDirective.prototype, "onInputsearch", null);
    InputSearchDirective = __decorate([
        Directive({
            selector: '[appInputSearch]'
        })
    ], InputSearchDirective);
    return InputSearchDirective;
}());

var InputSearchDirectiveModule = /** @class */ (function () {
    function InputSearchDirectiveModule() {
    }
    InputSearchDirectiveModule = __decorate([
        NgModule({
            declarations: [InputSearchDirective],
            imports: [
                CommonModule
            ],
            exports: [InputSearchDirective]
        })
    ], InputSearchDirectiveModule);
    return InputSearchDirectiveModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { InputSearchDirectiveModule, InputSearchDirective as ɵa, debounce as ɵb };
//# sourceMappingURL=input-deep-search.js.map
