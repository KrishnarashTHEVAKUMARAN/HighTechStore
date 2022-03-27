import { Component, OnInit } from '@angular/core';
import {PcPortable} from "./pcPortable";
import {PcPortableService} from "./pcPortable.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-pc-portable',
  templateUrl: './pc-portable.component.html',
  styleUrls: ['./pc-portable.component.css']
})
export class PcPortableComponent implements OnInit {
  public pcPortable: PcPortable[] = [];

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

}
