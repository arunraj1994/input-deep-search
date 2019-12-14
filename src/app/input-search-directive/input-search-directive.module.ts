import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputSearchDirective } from './input-search.directive';

@NgModule({
  declarations: [ InputSearchDirective ],
  imports: [
    CommonModule
  ],
  exports: [ InputSearchDirective ]
})
export class InputSearchDirectiveModule { }
