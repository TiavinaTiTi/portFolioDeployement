import {Component, inject, OnInit} from '@angular/core';
import {HeaderComponent} from "../../shared/components/header/header.component";
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {transition, trigger, useAnimation} from "@angular/animations";
import {fadeAnimations} from "../../shared/animations/fadeAnimations";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {UserService} from "../../shared/services/user/user-service";
import {JsonPipe, NgClass} from "@angular/common";
import {ThemeService} from "../../shared/services/theme/theme.service";

@Component({
  selector: 'app-signin-page',
  standalone: true,
  imports: [
    HeaderComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    JsonPipe,
    NgClass
  ],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.scss',
  animations: [

    trigger('fade', [
      transition(':enter', [
        useAnimation(fadeAnimations)
      ]),
    ]),
  ]
})
export class SigninPageComponent implements OnInit{
  userFormGroup!: FormGroup;
  fb:FormBuilder = inject(FormBuilder);
  route: Router = inject(Router);
  errorMessage!: string;

  theme: string = 'light';

  constructor(private authenService: UserService, private themeService: ThemeService) {
  }

  ngOnInit() {
    this.themeService.currentTheme.subscribe((value)=>{this.theme = value})

    this.userFormGroup = this.fb.group({
      email: this.fb.control('', Validators.required),
      pwd: this.fb.control('', Validators.required)
    })
  }

  handelLogin(){
    let email = this.userFormGroup.value.email
    let password =  this.userFormGroup.value.pwd

    console.log("user: "+ email + " pwd: " + password)

    this.authenService.login(email, password).subscribe({
      next: (value)=>{
        this.authenService.authenticateUser(value).subscribe({
          next: (data)=>{
            this.route.navigateByUrl("/skills")
          },
          error: (err)=>{
            this.errorMessage = err
            // console.log(" Error: "+ typeof err)
          }
        })
      }
    })
  }
}
