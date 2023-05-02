import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  produitList=[
    {content: 'coffe',prix: '4£' ,categorie:'food'},
    {content: 'Wedding dress',prix: '25£', categorie:'clothing'},
    {content: 'Computers',prix: '700£', categorie:'electronics'},
    {content:'Mobile phones',prix: '500£', categorie:'electronics'},
    {content: 'tea',prix: '4£', categorie:'food'},
    {content: 'T-shirt',prix: '20£', categorie:'clothing'},
    {content: 'Computers',prix: '800£', categorie:'electronics'},
    {content:'Tv',prix: '2000£', categorie:'electronics'}
  ]
  produit={content:'',prix: '', categorie:''}
  searchTerm: string = "";
  filteredProducts: any[] = [];

  constructor() {}

  ngOnInit() {
    this.filteredProducts = this.produitList;
  }

  filterList() {
    this.filteredProducts = this.produitList.filter(product =>
      product.categorie.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      product.content.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  categoryFilter: string = '';
  contentFilter: string = '';
  // updateSearchTerm(event: Event) {
  //   event.preventDefault();
  //   this.filterList();
  // }
  // filterProducts() {
  //   this.filteredProducts = this.produitList.filter(product => product.categorie === this.searchTerm);
  // }

}
