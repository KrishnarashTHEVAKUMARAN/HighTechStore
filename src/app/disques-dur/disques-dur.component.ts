import { Component, OnInit } from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {NgForm} from "@angular/forms";
import {DisqueDur} from "./disqueDur";
import {DisqueDurService} from "./disqueDur.service";

@Component({
  selector: 'app-disques-dur',
  templateUrl: './disques-dur.component.html',
  styleUrls: ['./disques-dur.component.css']
})
export class DisquesDurComponent implements OnInit {

  public disqueDurs: DisqueDur[] = [];
  public editDisqueDur!: DisqueDur | null;
  public deleteDisqueDur!: DisqueDur | null;

  constructor(private DisqueDurService: DisqueDurService) { }

  ngOnInit(): void {
    this.getDisqueDur();
  }

  public getDisqueDur(): void {
    this.DisqueDurService.getDisqueDur().subscribe(
      (response: DisqueDur[]) => {
        this.disqueDurs = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddDisqueDur(addForm: NgForm): void {
    const container = document.getElementById('addDisqueDurModal');
    container?.click();
    this.DisqueDurService.addDisqueDur(addForm.value).subscribe(
      (response: DisqueDur[]) => {
        console.log(response);
        this.getDisqueDur();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateDisqueDur(DisqueDur: DisqueDur): void {
    this.DisqueDurService.updateDisqueDur(DisqueDur).subscribe(
      (response: DisqueDur[]) => {
        console.log(response);
        this.getDisqueDur();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteDisqueDur(DisqueDurId: number): void {
    this.DisqueDurService.deleteDisqueDur(DisqueDurId).subscribe(
      (response: void) => {
        console.log(response);
        this.getDisqueDur();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onOpenModal(DisqueDur: DisqueDur | null, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addDisqueDurModal');
    }
    if (mode === 'edit') {
      this.editDisqueDur = DisqueDur;
      button.setAttribute('data-target', '#updateDisqueDurModal');
    }
    if (mode === 'delete') {
      this.deleteDisqueDur = DisqueDur;
      button.setAttribute('data-target', '#deleteDisqueDurModal');
    }
    container?.appendChild(button);
    button.click();
  }


}

