import { Component, OnInit } from '@angular/core';
import {ArticlesService} from "../../../services/articles.service";

@Component({
  selector: 'app-nouveautes',
  templateUrl: './nouveautes.component.html',
  styleUrls: ['./nouveautes.component.scss']
})
export class NouveautesComponent implements OnInit {

  articles: any = [];

  constructor(private articlesService: ArticlesService) { }

  ngOnInit(): void {
  }

  getArticles(): void {
    this.articles = this.articlesService.latestArticles;
  }



}
