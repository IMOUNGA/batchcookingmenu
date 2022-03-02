import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  articles = [
    {
      title: "Manger Bio",
      subtitle: "Lorem Ipsum is simply dummy text of the",
      img: "/assets/images/fakedata/1.jpg",
    },
    {
      title: "Manger Bio",
      subtitle: "Lorem Ipsum is simply dummy text of the",
      img: "/assets/images/fakedata/2.jpg",
    },
    {
      title: "Manger Bio",
      subtitle: "Lorem Ipsum is simply dummy text of the",
      img: "/assets/images/fakedata/3.jpg",
    }
  ]

  constructor() { }

  get latestArticles(): Array<any> {
    return this.articles;
  }
}
