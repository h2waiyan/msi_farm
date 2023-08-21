import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeroService } from '../services/hero.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements AfterViewInit {

  @ViewChild(MatPaginator) paginator?: MatPaginator;

  imgurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjR72qIFPpYfNchCnWKuvkyYKmzGzWoyo3teTMzjHOLeqVprsnCW2BNwO6S6rcReELE1s&usqp=CAU'


  myNumberArray = ['1', '2', '3', '4', '5'];

  constructor(private heroService: HeroService) { }

  dataSource = new MatTableDataSource(this.heroService.data);

  displayedColumns: string[] = ['id', 'name', 'nutrients', 'image'];

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator!;
  }

  name?: string;
  nutrients?: string;
  price?: number;

  addNewData() {
    // apiCall()
    alert(`${this.name} contains ${this.nutrients}. Price is ${this.price} $.`);
  }
}
