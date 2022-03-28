import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {SmartphoneService} from "./smartphone.service";
import {Smartphone} from "./smartphone";

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {
  public smartphone: Smartphone[] = [];
  public editSmartphone!: Smartphone | null;
  public deleteSmartphone!: Smartphone | null;

  constructor(private smartphoneService: SmartphoneService) { }

  ngOnInit(): void {
    this.getSmartphone();
  }

  public getSmartphone(): void {
    this.smartphoneService.getSmartphone().subscribe(
      (response: Smartphone[]) => {
        this.smartphone = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddSmartphone(addForm: NgForm): void {
    const container = document.getElementById('addsmartphoneModal');
    container?.click();
    this.smartphoneService.addSmartphone(addForm.value).subscribe(
      (response: Smartphone[]) => {
        console.log(response);
        this.getSmartphone();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateSmartphone(smartphone: Smartphone): void {
    this.smartphoneService.updateSmartphone(smartphone).subscribe(
      (response: Smartphone[]) => {
        console.log(response);
        this.getSmartphone();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteSmartphone(smartphoneId: number): void {
    this.smartphoneService.deleteSmartphone(smartphoneId).subscribe(
      (response: void) => {
        console.log(response);
        this.getSmartphone();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(smartphone: Smartphone | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addSmartphoneModal');
    }
    if (mode === 'edit') {
      this.editSmartphone = smartphone;
      button.setAttribute('data-target', '#updateSmartphoneModal');
    }
    if (mode === 'delete') {
      this.deleteSmartphone = smartphone;
      button.setAttribute('data-target', '#deletesmartphoneModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
