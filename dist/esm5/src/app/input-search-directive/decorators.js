export function debounce(delay) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVjb3JhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2lucHV0LWRlZXAtc2VhcmNoLyIsInNvdXJjZXMiOlsic3JjL2FwcC9pbnB1dC1zZWFyY2gtZGlyZWN0aXZlL2RlY29yYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxVQUFVLFFBQVEsQ0FBQyxLQUFtQjtJQUFuQixzQkFBQSxFQUFBLFdBQW1CO0lBQ3hDLE9BQU8sVUFBVSxNQUFXLEVBQUUsV0FBbUIsRUFBRSxVQUE4QjtRQUMvRSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUE7UUFFbEIsSUFBTSxRQUFRLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQztRQUVsQyxVQUFVLENBQUMsS0FBSyxHQUFHO1lBQUEsaUJBR2xCO1lBSDRCLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDbEMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sR0FBRyxVQUFVLENBQUMsY0FBTSxPQUFBLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSSxFQUFFLElBQUksQ0FBQyxFQUExQixDQUEwQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2hFLENBQUMsQ0FBQztRQUVGLE9BQU8sVUFBVSxDQUFDO0lBQ3BCLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZGVsYXk6IG51bWJlciA9IDcwMCk6IE1ldGhvZERlY29yYXRvciB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldDogYW55LCBwcm9wZXJ0eUtleTogc3RyaW5nLCBkZXNjcmlwdG9yOiBQcm9wZXJ0eURlc2NyaXB0b3IpIHtcclxuICAgICAgbGV0IHRpbWVvdXQgPSBudWxsXHJcbiAgXHJcbiAgICAgIGNvbnN0IG9yaWdpbmFsID0gZGVzY3JpcHRvci52YWx1ZTtcclxuICBcclxuICAgICAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xyXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IG9yaWdpbmFsLmFwcGx5KHRoaXMsIGFyZ3MpLCBkZWxheSk7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIHJldHVybiBkZXNjcmlwdG9yO1xyXG4gICAgfTtcclxuICB9Il19