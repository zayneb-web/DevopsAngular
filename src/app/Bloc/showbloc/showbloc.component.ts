import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/Model/Bloc';
import { BlocService } from 'src/app/bloc.service';

@Component({
  selector: 'app-showbloc',
  templateUrl: './showbloc.component.html',
  styleUrls: ['./showbloc.component.css']
})
export class ShowblocComponent {

  show = false
  blocs!: Bloc[];
constructor(private blocservice: BlocService,private router: Router){}
  ngOnInit(): void {
    
    this.ShowBlocs();
  }

  ShowBlocs() {
    this.blocservice.findAll().subscribe(
      data => {
        this.blocs = data;
      },
      error => {
        console.log('Error fetching blocs:', error);
      }
    );
  }

  navigateToUpdateBloc(bId: number) {
    this.router.navigate(['update',bId]);
  }

  navigateToaddBloc() {
    this.router.navigate(['add']);
  }

  delete(id:any){
    this.blocservice.deleteBloc(id).subscribe(
      ()=>{
      //alert('next')
      window.location.reload();
      },
      (err)=>{
      let status=err.status;
      switch (status){
      case 0:alert('server ') ;break;
      case 401:alert('unauthoriz ') ;break;
      case 404:alert('unauthoriz ') ;break;
      }
      },
      );
      }
}
