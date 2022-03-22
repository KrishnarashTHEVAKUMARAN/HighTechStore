import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import {InscriptionComponent} from "./inscription/inscription.component";
import {PanierComponent} from "./panier/panier.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'PcPortable', component: PcPortableComponent },
  { path: 'PcBureau', component: PcBureauComponent },
  { path: 'PcAccessoires', component: PcAccessoiresComponent },
  { path: 'Connexion', component: ConnexionComponent },
  { path: 'Inscription', component: InscriptionComponent},
  { path: 'Panier', component: PanierComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
