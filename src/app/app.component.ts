import { Component, Optional } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.RAW.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MD2 with CLI - Getting Started';
  isDarkTheme: boolean;
  lastDialogResult: string;

  foods: any[] = [
    {name: 'Pizza', rating: 'Excellent'},
    {name: 'Burritos', rating: 'Great'},
    {name: 'French fries', rating: 'Pretty good'},
  ];

  progress: number = 0;

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
    setInterval(() => {
      this.progress = (this.progress + Math.floor(Math.random() * 4) + 1) % 100;
    }, 200);
  }

  openDialog(){
    let dialogRef = this._dialog.open(DialogContent);

    dialogRef.afterClosed().subscribe(result => {
      this.lastDialogResult = result;
    })
  }

  showSnackbar(){
    this._snackbar.open('YUM SNACKS', 'CHEW');
  }

  handleBtnClick() : void {
    alert('Button clicked');
  }
}

//Export 2nd component for the dialog. 

@Component({
  template: `
    <p>This is a dialog</p>
    <p>
      <label>
        This is a text box inside of a dialog.
        <input #dialogInput>
      </label>
    </p>
    <p> <button md-button (click)="dialogRef.close(dialogInput.value)">CLOSE</button> </p>
  `,
})

export class DialogContent {
  constructor( @Optional() public dialogRef: MdDialogRef<DialogContent>) { }
}