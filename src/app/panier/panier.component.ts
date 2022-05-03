import {Component, OnInit} from '@angular/core';
import {Produit} from '../interfaces/Produit';
import {PcPortable} from '../pc-portable/pcPortable';

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
      image: "assets/image/pcPortable/G_741173_A.avif",
      prix: 10
    },
    {
      id: 2,
      caracteristique: "Capacité du stockage 2 To, Compatibilité du périphérique Console de jeu, Interface du disque dur Serial ATA 600, Marque Seagate",
      article: "Seagate STBD",
      image: "assets/image/disqueDur/Seagate_STBD.jpg",
      prix: 2.5
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
    // todo: load produitsDansLePanier using the API
  }

  deleteFromCart(produit: Produit, ProductProduitsDansLePanier: Produit[]) {
    alert(`${produit.article} a ete suprimee du panier`)
    ProductProduitsDansLePanier.splice(produit.id);
    //todo: add the backend
    // todo: remove produit from produitDansLePanier
  }

  countProduct(ProduitsDansLePanier: Produit[]){
    return ProduitsDansLePanier.length;
  }

  totalPrix(ProductProduitsDansLePanier: Produit[]) {
    var total=0;
    ProductProduitsDansLePanier.forEach((productPanier)=>
    {total = total+productPanier.prix;  })
    return total
  }

  deleteProduct(produit: Produit,ProductProduitsDansLePanier: Produit[]){
    ProductProduitsDansLePanier.splice(produit.id);
  }

  addProduct(produit: Produit,ProductProduitsDansLePanier: Produit[]){
    ProductProduitsDansLePanier.push(produit);
  }

}
