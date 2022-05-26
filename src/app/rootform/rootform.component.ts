import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rootform',
  templateUrl: './rootform.component.html',
  styleUrls: ['./rootform.component.scss'],
})
export class RootformComponent implements OnInit {

  pdfSrc = './../assets/Rotblankett.pdf';
  infoLinkSrc = 'https://www.skatteverket.se/foretag/skatterochavdrag/rotochrut.4.2ef18e6a125660db8b080002674.html';

  constructor() {}

  ngOnInit(): void {}

  pdfClick() {
    window.open(this.pdfSrc, '_blank');
  }

  infoLinkClick() {
    window.open(this.infoLinkSrc, '_blank');
  }

}
