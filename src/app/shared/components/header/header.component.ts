import {Component, EventEmitter, Output} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  menus = [
    {'label': 'Accueil', 'icon': '', 'root': '/home'},
    {'label': 'Skills', 'icon': '', 'root': '/skills'},
    {'label': 'Bard', 'icon': '', 'root': '/bard'},
    {'label': 'Contact', 'icon': '', 'root': '/contact'},
    {'label': '', 'icon': 'bi-person-circle', 'root': '/sign-in'}
  ]


  constructor(private route: Router) {
  }

  /*navigate(url: string){
    setTimeout(()=>{
      this.route.navigateByUrl(url)
    }, 1000)
  }*/


  // TEST ENFANT TO PARENT
  /*@Output() eventIsShow = new EventEmitter<boolean>();

  /!**
   * Permet d'activer la methode isShow
   *!/
  text(){
    console.log("Valeur Enfant")
    this.eventIsShow.emit()
  }*/

}
