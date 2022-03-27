import { Component, OnInit } from '@angular/core';
import {PcPortable} from "./pcPortable";
import {PcPortableService} from "./pcPortable.service";
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
  public pcPortable: PcPortable[] = [];
  public editPcPortable!: PcPortable | null;
  public deletePcPortable!: PcPortable | null;

  constructor(private pcPortableService: PcPortableService) { }

  ngOnInit(){
    this.getPcPortable();
  }

  public getPcPortable(): void {
    this.pcPortableService.getPcPortable().subscribe(
      (response: PcPortable[]) => {
        this.pcPortable = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddPcPortable(addForm: NgForm): void {
    const container = document.getElementById('addPcPortableModal');
    container?.click();
    this.pcPortableService.addPcPortable(addForm.value).subscribe(
      (response: PcPortable[]) => {
        console.log(response);
        this.getPcPortable();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdatePcPortable(pcPortable: PcPortable): void {
    this.pcPortableService.updatePcPortable(pcPortable).subscribe(
      (response: PcPortable[]) => {
        console.log(response);
        this.getPcPortable();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeletePcPortable(pcPortableId: number): void {
    this.pcPortableService.deletePcPortable(pcPortableId).subscribe(
      (response: void) => {
        console.log(response);
        this.getPcPortable();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  public onOpenModal(pcPortable: PcPortable | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addPcPortableModal');
    }
    if (mode === 'edit') {
      this.editPcPortable = pcPortable;
      button.setAttribute('data-target', '#updatePcPortableModal');
    }
    if (mode === 'delete') {
      this.deletePcPortable = pcPortable;
      button.setAttribute('data-target', '#deletePcPortableModal');
    }
    container?.appendChild(button);
    button.click();
  }

}
