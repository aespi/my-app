import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
<<<<<<< HEAD

import { products } from '../products';
=======
>>>>>>> ab0ddcb56a99de4ca7adb250858d9076850b1e15

import { products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product;
<<<<<<< HEAD

  constructor(
    private route: ActivatedRoute,
  ) { }
=======

  constructor(
    private route: ActivatedRoute,
  ) { }



  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }
>>>>>>> ab0ddcb56a99de4ca7adb250858d9076850b1e15

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.product = products[+params.get('productId')];
      });
    }
  }