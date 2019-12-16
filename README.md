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
<input type="text" [(ngModel)]="searchInput" appInputSearch [searchText]="searchInput" [jsonData]="data" [dataProperties]="properties" (filteredData)="filteredData($event)">
```
4. In .ts assign value to model variable "data" and give as input to [jsonData] attribute.
  ```typescript
  this.data = [
    {
      "name": "Ravi",
      "age": 16,
      "hobbies": [{
        "game": "tennis"
        "proffesional": "no"
        },
        {
          "game": "cricket"
          "proffesional": "yes"
        },
      ],
      "name": "Ramu",
      "age": 23,
      "hobbies": [{
        "game": "batmiton"
        "proffesional": "yes"
        },
        {
          "game": "hockey"
          "proffesional": "no"
        },
      ]
    }
  ]
  ```

5. In .ts assign value to model variable "properties" and give as input to [dataProperties] attribute. The properties are the object properties where you want to make search.
  ```typescript
    this.properties = ["game","proffesional"];
  ```

Above is the example where I'am assigning the array of object properties to make search in that particular property only.If it is empty array It make search in all object properties. 

6. Assign the 'searchInput' value to the property [searchText]. The 'searchInput' should be the value which is typed in the search input tag.

```typescript
  [(ngModel)]="searchInput"
  [searchText]="searchInput"
```

7. Add the below event method to the input tag to get the filtered data.

```html
  (filteredData)="filteredData($event)"
```

8. In .ts file add function to get the filtered data from the given json object.

```typescript
filteredData(data) {
    //....
}
```
