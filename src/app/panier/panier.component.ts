import { Component, OnInit } from '@angular/core';
import { Produit } from '../interfaces/Produit';
import { PcPortable } from '../pc-portable/pcPortable';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  public produitsDansLePanier: Produit[] = [
{
  id: 1,
  caracteristique: "ABC",
  article: "Spider Man Movie",
  image: "https://api.lorem.space/image/movie?w=150&h=220&t=1"
}
  ];

  constructor() { }

  ngOnInit(): void {
    // todo: load produitsDansLePanier using the API
  }

  deleteFromCart(produit: Produit){
    alert(`${produit.article} a ete suprimee du panier`)
    //todo: add the backend 
    // todo: remove produit from produitDansLePanier
  }

}
