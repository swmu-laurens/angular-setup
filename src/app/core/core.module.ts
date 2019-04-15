import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '@core/router/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [CommonModule, AppRoutingModule, BrowserModule],
  exports: [CommonModule, AppRoutingModule, BrowserModule]
})
export class CoreModule {}
