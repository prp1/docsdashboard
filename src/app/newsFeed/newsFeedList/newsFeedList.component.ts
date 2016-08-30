import { Component, Input  } from '@angular/core'

import { NewsFeedItem, NewsFeedItema } from '../'

@Component({
  selector: 'dd-news-feed-list',
  templateUrl: 'newsFeedList.template.html',
  directives: [
    //NewsFeedItem
  ]  
})

export class NewsFeedListComponent {

    @Input() items;

}