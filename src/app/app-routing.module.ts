import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { HomeComponent } from './home/home.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import {InscriptionComponent} from "./inscription/inscription.component";
import {PanierComponent} from "./panier/panier.component";
import {SmartphoneComponent} from "./smartphone/smartphone.component";
import {TelephoneFixeComponent} from "./telephone-fixe/telephone-fixe.component";
import {DisquesDurComponent} from "./disques-dur/disques-dur.component";
import {CleUsbComponent} from "./cle-usb/cle-usb.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'PcPortable', component: PcPortableComponent },
  { path: 'PcBureau', component: PcBureauComponent },
  { path: 'PcAccessoires', component: PcAccessoiresComponent },
  { path: 'Connexion', component: ConnexionComponent },
  { path: 'Inscription', component: InscriptionComponent},
  { path: 'Panier', component: PanierComponent},
  { path:'Smartphone', component: SmartphoneComponent},
  { path:'TelephoneFixe', component: TelephoneFixeComponent},
  { path:'DisqueDur', component: DisquesDurComponent},
  { path:'CleUSB', component: CleUsbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
