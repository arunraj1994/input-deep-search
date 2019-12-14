## Installation

1.Use npm to install the package

 ```terminal
  npm install input-deep-search --save
 ```

2.Import the module `InputSearchDirectiveModule` inside your module where you need to use it.

  ```typescript
import { InputSearchDirectiveModule } from 'input-deep-search'; 
    @NgModule({
        // ...
        imports: [
            // ...
            InputSearchDirectiveModule
        ]
})
  ```

3. In template add directive like below

```html
<input type="text" [(ngModel)]="searchInput" appInputSearch [searchText]="searchInput" [jsonData]=data [dataProperties]=properties (filteredData)="filteredData($event)">
```

4. In .ts file add function to get the filtered data.

```typescript
filteredData(data) {
    //....
}
```