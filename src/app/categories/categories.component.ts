import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from './../services/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoriesData = {};

  constructor(private categories: CategoriesService) { }

  ngOnInit() {
    this.categories.getCategories().subscribe(data => {
      console.log("data=",data);
      data.success && (this.categoriesData = data);
    });
  }

}
