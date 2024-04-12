import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BlocService } from 'src/app/bloc.service';

@Component({
  selector: 'app-updatebloc',
  templateUrl: './updatebloc.component.html',
  styleUrls: ['./updatebloc.component.css']
})
export class UpdateblocComponent {


  bloc!:any;
  constructor(private fb:FormBuilder,private blocservice:BlocService, private ac:ActivatedRoute,private router: Router){}
  

  ngOnInit(){
    this.blocservice.findById(this.ac.snapshot.params['id']).subscribe(
      (data)=>{
  this.bloc=data;
  this.formBuilder.patchValue(this.bloc)
  console.log(data)
      }
    );
     
}

formBuilder=this.fb.group(
  {
    idBloc:[''],
    nomBloc:[''],
    capaciteBloc:[''],
   
  }
)

update(){
  this.blocservice.updateBloc(this.formBuilder.value).subscribe(
    ()=>{
      // alert('modification effectué');
      this.router.navigate(['']);
      
    }
)}
 }

