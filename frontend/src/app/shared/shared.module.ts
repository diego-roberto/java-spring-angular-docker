import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from '../navbar/navbar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ErrorDialogComponent } from './util/dialog/error-dialog.component';
import { ConfirmationDialogComponent } from './util/dialog/confirmation-dialog.component';
import { TextMaskModule } from 'angular2-text-mask';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    NavbarComponent,
    ErrorDialogComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    MatDialogModule,
    TextMaskModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatTabsModule,
    MatToolbarModule,
    NavbarComponent,
    MatDialogModule,
    TextMaskModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class SharedModule { }
