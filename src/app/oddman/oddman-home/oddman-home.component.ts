import { Component, OnInit } from '@angular/core';
import { animals } from '../data/animals';
import { MatDialog } from '@angular/material/dialog';
import { ResultDialogComponent } from '../result-dialog/result-dialog.component';

@Component({
  selector: 'app-oddman-home',
  templateUrl: './oddman-home.component.html',
  styleUrls: ['./oddman-home.component.scss']
})
export class OddmanHomeComponent implements OnInit {

  correct: boolean = false;
  animals: any;
  i = 0;
  imagesFolder = "/assets/icons/animals/svg";

  currentQuestion: any;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.animals = animals;
    this.currentQuestion = this.animals[this.i++];
  }


  openDialog(answer): void {
    const dialogRef = this.dialog.open(ResultDialogComponent, {
      data: { correct: (this.currentQuestion.answer === answer) }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && this.i < this.animals.length) {
        this.currentQuestion = this.animals[this.i++]
      }
    });
  }

}
