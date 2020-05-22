import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { untilDestroyed, UntilDestroy } from '@ngneat/until-destroy';
import { ResultsComponent } from '../results/results.component';
import {animals} from 'src/app/constants';


@UntilDestroy()
@Component({
  selector: 'app-spelling-home',
  templateUrl: './spelling-home.component.html',
  styleUrls: ['./spelling-home.component.scss']
})
export class SpellingHomeComponent implements OnInit ,OnDestroy {

  group:FormGroup;
  imagesFolder = "/assets/icons/animals/svg";
  currentIndex:number = 0;
  currentImage:string;

  data:any[] =  animals;

  message:any = null;

  constructor(private fb:FormBuilder,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.group = this.fb.group({
       spelling:this.fb.control(null,Validators.required)
    });
    this.currentImage = this.data[this.currentIndex++];
    this.group.valueChanges
    .pipe(untilDestroyed(this))
    .subscribe(()=>{
      this.message = null;
    })
  }


  getRandom(){
    return  Math.floor(Math.random() * this.data.length) + 1  ;
  }

  checkSpelling(): void {
    const answer = this.group.value.spelling;
    if(this.group.invalid){
       this.message ="Please enter the spelling.";
       return;
    }
    const dialogRef = this.dialog.open(ResultsComponent, {
      data: { correct: (this.currentImage.toLowerCase() === answer.toLowerCase()) ,hint:this.currentImage.toUpperCase(),
        alldone: this.currentIndex === this.data.length }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result && this.currentIndex < this.data.length) {
        this.currentImage = this.data[this.currentIndex++];
        this.group.reset();
      }
    });
  }

  ngOnDestroy(){

  }

}
