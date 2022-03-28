import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {CleUSBService} from "./cleUSB.service";
import {CleUSB} from "./cleUSB";

@Component({
  selector: 'app-cle-usb',
  templateUrl: './cle-usb.component.html',
  styleUrls: ['./cle-usb.component.css']
})
export class CleUsbComponent implements OnInit {

  public cleUsb: CleUSB[] = [];
  public editCleUsb!: CleUSB | null;
  public deleteCleUsb!: CleUSB | null;

  constructor(private cleUSBService: CleUSBService) { }

  ngOnInit(): void {
    this.getCleUsb();
  }

  public getCleUsb(): void {
    this.cleUSBService.getCleUSB().subscribe(
      (response: CleUSB[]) => {
        this.cleUsb = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddCleUsb(addForm: NgForm): void {
    const container = document.getElementById('addCleUsbModal');
    container?.click();
    this.cleUSBService.addCleUSB(addForm.value).subscribe(
      (response: CleUSB[]) => {
        console.log(response);
        this.getCleUsb();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateCleUsb(CleUsb: CleUSB): void {
    this.cleUSBService.updateCleUSB(CleUsb).subscribe(
      (response: CleUSB[]) => {
        console.log(response);
        this.getCleUsb();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteCleUsb(CleUsbId: number): void {
    this.cleUSBService.deleteCleUSB(CleUsbId).subscribe(
      (response: void) => {
        console.log(response);
        this.getCleUsb();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(CleUsb: CleUSB | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addCleUsbModal');
    }
    if (mode === 'edit') {
      this.editCleUsb = CleUsb;
      button.setAttribute('data-target', '#updateCleUsbModal');
    }
    if (mode === 'delete') {
      this.deleteCleUsb = CleUsb;
      button.setAttribute('data-target', '#deleteCleUsbModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
