import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentThemeSubject = new BehaviorSubject<string>('dark');
  currentTheme = this.currentThemeSubject.asObservable();
  constructor() { }

  setCurrentTheme(theme: string): void {
    this.currentThemeSubject.next(theme)
  }
}
