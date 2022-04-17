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
  caracteristique: "Dimensions 247 x 355 x 19 mm, Poids 2.01 kg, Processeur Intel Core i7-11800H, RAM 16 Go, Carte graphique Nvidia Geforce RTX 3050, Système d'exploitation Windows",
  article: "Asus Vivobook",
  image: "assets/image/pcPortable/G_741173_A.avif"
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
