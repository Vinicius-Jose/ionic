import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

   constructor(private navController: NavController, private router: Router) { }
	
	
  ngOnInit() {
  }
  
  goToTabs(){
    this.router.navigateByUrl("/tabs/tab1");
  }
 

}
