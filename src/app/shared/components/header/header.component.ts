import {Component, inject, Input} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {UserService} from "../../services/user/user-service";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass
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
    {'label': 'Docs', 'icon': '', 'root': '/docs'},
    // {'label': '', 'icon': 'bi-person-circle', 'root': '/sign-in'}
  ]

  route: Router = inject(Router);
  autheService: UserService = inject(UserService);

  @Input() theme: boolean = false;

  sign(){
    if(this.autheService.isAuthenticed()){
      this.autheService.logOut()
      this.route.navigateByUrl("/sign-in")
    }else {
      this.route.navigateByUrl("/sign-in")
    }
  }

}
