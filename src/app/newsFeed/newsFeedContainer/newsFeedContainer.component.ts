import { Component } from '@angular/core'
import { NewsFeedItem } from '../newsFeedItem'

@Component({
  selector: 'dd-news-feed-container',
  templateUrl: 'newsFeedContainer.template.html',
  directives: [
    NewsFeedItem
  ]  
})

export class NewsFeedContainer {

  public items = [
    { title: 'Paulius commited', description: 'Refactored file upload' },
    { title: 'Tomas commited', description: 'Added migrations' }
  ];  

  ngOnInit() {
        var socket = io('http://localhost:3001');

        socket.on('newsFeed', (newItem) => {
            this.items.unshift(newItem);
        })
  }

}