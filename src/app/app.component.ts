import { Component, Optional } from '@angular/core';

import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.RAW.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MD2 with CLI - Getting Started';

  handleBtnClick() {
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