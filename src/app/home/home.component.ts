import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  @ViewChild('dialog') demoDialog: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(this.demoDialog);
  }

  ngOnInit(): void {
  }

}


export class Dialog {}
