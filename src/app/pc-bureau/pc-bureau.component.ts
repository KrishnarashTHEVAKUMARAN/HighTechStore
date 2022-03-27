import { Component, OnInit } from '@angular/core';
import {PcBureau} from "./pcBureau";
import {PcBureauService} from "./pcBureau.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {PcPortable} from "../pc-portable/pcPortable";

@Component({
  selector: 'app-pc-bureau',
  templateUrl: './pc-bureau.component.html',
  styleUrls: ['./pc-bureau.component.css']
})
export class PcBureauComponent implements OnInit {
  public pcBureau: PcBureau[] = [];
  public editPcBureau!: PcBureau | null;
  public deletePcBureau!: PcBureau | null;

  constructor(private pcBureauService: PcBureauService) { }

  ngOnInit(): void {
    this.getPcBureau();
  }

  public getPcBureau(): void {
    this.pcBureauService.getPcBureau().subscribe(
      (response: PcBureau[]) => {
        this.pcBureau = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPcBureau(addForm: NgForm): void {
    const container = document.getElementById('addPcBureauModal');
    container?.click();
    this.pcBureauService.addPcBureau(addForm.value).subscribe(
      (response: PcBureau[]) => {
        console.log(response);
        this.getPcBureau();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePcBureau(pcBureau: PcBureau): void {
    this.pcBureauService.updatePcBureau(pcBureau).subscribe(
      (response: PcBureau[]) => {
        console.log(response);
        this.getPcBureau();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePcBureau(pcBureauId: number): void {
    this.pcBureauService.deletePcBureau(pcBureauId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPcBureau();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(pcBureau: PcBureau | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPcBureauModal');
    }
    if (mode === 'edit') {
      this.editPcBureau = pcBureau;
      button.setAttribute('data-target', '#updatePcBureauModal');
    }
    if (mode === 'delete') {
      this.deletePcBureau = pcBureau;
      button.setAttribute('data-target', '#deletePcBureauModal');
    }
    container?.appendChild(button);
    button.click();
  }


}
