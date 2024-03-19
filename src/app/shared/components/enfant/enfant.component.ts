import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-enfant',
  standalone: true,
  imports: [],
  templateUrl: './enfant.component.html',
  styleUrl: './enfant.component.scss'
})
export class EnfantComponent implements OnChanges{
  @Input() valeurDuParent!: string;
  @Output() evenementVersParent: EventEmitter<string> = new EventEmitter<string>();

  envoyerEvent() {
    this.evenementVersParent.emit('Hello depuis l\'enfant!');
  }
  ngOnChanges(changes: SimpleChanges) {

  }
}
