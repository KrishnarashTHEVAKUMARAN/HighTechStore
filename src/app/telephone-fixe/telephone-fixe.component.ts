import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {TelephoneFixe} from "./telephoneFixe";
import {TelephoneFixeService} from "./telephoneFixe.service";

@Component({
  selector: 'app-telephone-fixe',
  templateUrl: './telephone-fixe.component.html',
  styleUrls: ['./telephone-fixe.component.css']
})
export class TelephoneFixeComponent implements OnInit {
  public telephoneFixe: TelephoneFixe[] = [];
  public editTelephoneFixe!: TelephoneFixe | null;
  public deleteTelephoneFixe!: TelephoneFixe | null;

  constructor(private telephoneFixeService: TelephoneFixeService) { }

  ngOnInit(): void {
    this.getTelephoneFixe();
  }

  public getTelephoneFixe(): void {
    this.telephoneFixeService.getTelephoneFixe().subscribe(
      (response: TelephoneFixe[]) => {
        this.telephoneFixe = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddTelephoneFixe(addForm: NgForm): void {
    const container = document.getElementById('addTelephoneFixeModal');
    container?.click();
    this.telephoneFixeService.addTelephoneFixe(addForm.value).subscribe(
      (response: TelephoneFixe[]) => {
        console.log(response);
        this.getTelephoneFixe();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateTelephoneFixe(telephoneFixe: TelephoneFixe): void {
    this.telephoneFixeService.updateTelephoneFixe(telephoneFixe).subscribe(
      (response: TelephoneFixe[]) => {
        console.log(response);
        this.getTelephoneFixe();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteTelephoneFixe(telephoneFixeId: number): void {
    this.telephoneFixeService.deleteTelephoneFixe(telephoneFixeId).subscribe(
      (response: void) => {
        console.log(response);
        this.getTelephoneFixe();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(telephoneFixe: TelephoneFixe | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addTelephoneFixeModal');
    }
    if (mode === 'edit') {
      this.editTelephoneFixe = telephoneFixe;
      button.setAttribute('data-target', '#updateTelephoneFixeModal');
    }
    if (mode === 'delete') {
      this.deleteTelephoneFixe = telephoneFixe;
      button.setAttribute('data-target', '#deleteTelephoneFixeModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
