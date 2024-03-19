import { Routes } from '@angular/router';
import {ParentComponent} from "./shared/components/parent/parent.component";
import {TemplatePageComponent} from "./views/template-page/template-page.component";
import {NotFoundPageComponent} from "./views/not-found-page/not-found-page.component";

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  {
    path: '',
    component: TemplatePageComponent,
    children: [
      {
        path: "home",
        // component: HomePageComponent,
        loadComponent: ()=> import('./views/home-page/home-page.component').then(m => m.HomePageComponent)
      },
      {
        path: "skills",
        // component: SkillsPageComponent
        loadComponent: ()=> import('./views/skill-page/skill-page.component').then(m => m.SkillPageComponent)
      },
      {
        path: "bard",
        // component: BardPageComponent
        loadComponent: () => import('./views/bard-page/bard-page.component').then(m => m.BardPageComponent)
      },
      {
        path: "contact",
        loadComponent: () => import('./views/contact-page/contact-page.component').then(m => m.ContactPageComponent)
      },
      {
        path: "test",
        component: ParentComponent
      },
      {
        path: "sign-in",
        loadComponent: () => import('./views/signin-page/signin-page.component').then(m => m.SigninPageComponent)
      }
    ]
  },
  {
    path: "404-NotFound",
    component: NotFoundPageComponent
  },

  {
    path: "**",
    redirectTo: '/404-NotFound'
  }
];
