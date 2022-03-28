import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PcPortableComponent } from './pc-portable/pc-portable.component';
import { HomeComponent } from './home/home.component';
import { PcBureauComponent } from './pc-bureau/pc-bureau.component';
import { PcAccessoiresComponent } from './pc-accessoires/pc-accessoires.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FooterComponent } from './footer/footer.component';
import { InscriptionComponent } from './inscription/inscription.component';
import {HttpClientModule} from "@angular/common/http";
import { PanierComponent } from './panier/panier.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { TelephoneFixeComponent } from './telephone-fixe/telephone-fixe.component';
import { DisquesDurComponent } from './disques-dur/disques-dur.component';
import { CleUsbComponent } from './cle-usb/cle-usb.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PcPortableComponent,
    HomeComponent,
    PcBureauComponent,
    PcAccessoiresComponent,
    ConnexionComponent,
    FooterComponent,
    InscriptionComponent,
    PanierComponent,
    SmartphoneComponent,
    TelephoneFixeComponent,
    DisquesDurComponent,
    CleUsbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
