import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngx-deep-input-search';
  properties = ['image'];
  searchInput = '';
  data = [{
    'title': 'some title',
    'channel_id':'123we',
    'options': [{
            'channel_id':'def',
            'image':'http://asdasd.com/all-inclusive-block-img.jpg',
            'title':'All-Inclusive',
            'options': [{
                    'channel_id':'sun',
                    'title':'Some Recommends',
                    'options': {
                            'image':'http://www.asdasd.com',
                            'title':'Sandals',
                            'id':'2'
                     }
            },
            {
                    'channel_id':'sun',
                    'title':'Some Recommends',
                    'options': {
                            'image':'http://www.sun.com',
                            'title':'Boots',
                            'id':'1'
                     }
            }]
  }]
},
{
    'title': 'some title',
    'channel_id':'2323',
    'options': [{
            'channel_id':'abc',
            'image':'http://asdasd.com/ghgh-block-img.jpg',
            'title':'gfgfg',
            'options': [{
                    'channel_id':'dsa2',
                    'title':'Some Recommends',
                    'options': {
                            'image':'http://www.asdasd.com',
                            'title':'Sandals',
                            'id':'2'
                     }
            },
            {
                    'channel_id':'dsa3',
                    'title':'Some Recommends',
                    'options': {
                            'image':'http://www.badasd.com',
                            'title':'Boots',
                            'id':'1'
                     }
            }]
  }]
}];

filteredData(data1) {
  console.log(data1);
}
}
