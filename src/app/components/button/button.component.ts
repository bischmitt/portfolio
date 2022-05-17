import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() btnText: string = 'Ver mais';
  @Input() btnType: string = '';
  @Input() hrefLink: string = 'https://github.com/bischmitt';
  @Output() clickChildren = new EventEmitter;
  textFilho = 'clicou no filho';

  constructor() { }

  ngOnInit(): void {
  }

  clicou() {
    this.clickChildren.emit(this.textFilho);
  }

}
