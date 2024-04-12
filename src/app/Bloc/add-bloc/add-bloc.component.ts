import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { BlocService } from 'src/app/bloc.service';

@Component({
  selector: 'app-add-bloc',
  templateUrl: './add-bloc.component.html',
  styleUrls: ['./add-bloc.component.css']
})
export class AddBlocComponent {
  
  bloc: Bloc = new Bloc(); 
  
  constructor(private blocservice: BlocService, private router: Router) {}

  saveBloc() {
    if (!this.bloc.nomBloc) {
       alert('Veuillez entrer un nom pour le bloc.');
       return; 
    }

    if (this.bloc.capaciteBloc <= 0) {
       alert('Veuillez entrer une capacité valide pour le bloc.');
       return; 
    }

    this.blocservice.addBloc(this.bloc).subscribe(
       () => {
          this.router.navigate(['']);
          alert('added');
       },
       (error) => {
          console.error('Error adding bloc:', error);
       }
    );
  }
 
} 