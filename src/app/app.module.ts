import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowblocComponent } from './Bloc/showbloc/showbloc.component';
import { UpdateblocComponent } from './Bloc/updatebloc/updatebloc.component';
import { AddBlocComponent } from './Bloc/add-bloc/add-bloc.component';
import { BlocService } from './bloc.service';

@NgModule({
  declarations: [
    AppComponent,
    ShowblocComponent,
    UpdateblocComponent,
    AddBlocComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [BlocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
