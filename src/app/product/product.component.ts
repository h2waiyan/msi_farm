import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private currentRoute: ActivatedRoute,
    private heroService: HeroService) {
  }

  productid!: string;

  name!: String;
  img!: String;
  from!: String;
  organic!: boolean;

  imgurl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjR72qIFPpYfNchCnWKuvkyYKmzGzWoyo3teTMzjHOLeqVprsnCW2BNwO6S6rcReELE1s&usqp=CAU'

  ngOnInit(): void {
    this.productid = this.currentRoute.snapshot.params['productid'];

    const currentIndex = parseInt(this.productid);

    this.name = this.heroService.data[currentIndex].productName;
    this.img = this.heroService.data[currentIndex].image;
    this.from = this.heroService.data[currentIndex].from;
    this.organic = this.heroService.data[currentIndex].organic; // avo - true, chesse = false;
  }


}
