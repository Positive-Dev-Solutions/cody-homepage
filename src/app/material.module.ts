import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
imports: [
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
],
exports: [
  MatIconModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
],

})

export class MaterialModule { }
