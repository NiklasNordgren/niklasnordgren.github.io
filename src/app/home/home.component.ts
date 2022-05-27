import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  HostListener,
  OnInit,
} from '@angular/core';

export interface Tile {
  cols: number;
  rows: number;
  imgSrc: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.changeDetectorRef.detectChanges();
  }

  mobileQuery: MediaQueryList;

  tiles: Tile[] = [
    { cols: 8, rows: 2, imgSrc: './../assets/banner1.jpg' },
    { cols: 2, rows: 1, imgSrc: './../assets/job18_circuits.jpg' },
    { cols: 2, rows: 1, imgSrc: './../assets/job17_facade.jpg' },
    { cols: 4, rows: 2, imgSrc: './../assets/job4_stairs.jpg' },
    { cols: 1, rows: 2, imgSrc: './../assets/job12_circuits.jpg' },
    { cols: 3, rows: 2, imgSrc: './../assets/job2_bathroom.jpg' },
    { cols: 6, rows: 2, imgSrc: './../assets/job11_bathroom.jpg' },
    { cols: 2, rows: 1, imgSrc: './../assets/job16_cross.jpg' },
    { cols: 2, rows: 2, imgSrc: './../assets/job8_floor_heating.jpg' },
    { cols: 2, rows: 1, imgSrc: './../assets/job6_room.jpg' },
    //{ text: ':)', cols: 4, rows: 2, color: '#DDBDF1', imgSrc: "./../assets/job13_living_room.jpg" },
    { cols: 2, rows: 1, imgSrc: './../assets/job14_kitchen.jpg' },
    { cols: 4, rows: 1, imgSrc: './../assets/job15_cabinet.jpg' },
    { cols: 2, rows: 1, imgSrc: './../assets/job1_elgiganten.jpg' },
    /*
    { text: ':)', cols: 2, rows: 1, color: 'lightgreen', imgSrc: "./../assets/job5_water.jpg" },
    { text: ':)', cols: 2, rows: 1, color: 'lightgreen', imgSrc: "./../assets/job10_electricity_box.jpg" },
    { text: ':)', cols: 2, rows: 1, color: 'lightpink', imgSrc: "./../assets/job7_box.jpg" },
    { text: 'Three', cols: 2, rows: 1, color: 'lightpink', imgSrc: "./../assets/job3_floor_heating.jpg" },
    { text: ':)', cols: 1, rows: 1, color: '#DDBDF1', imgSrc: "" },
    { text: ':)', cols: 1, rows: 1, color: 'lightgreen', imgSrc: "" },
    { text: ':)', cols: 1, rows: 1, color: 'lightblue', imgSrc: "" },
    { text: ':)', cols: 1, rows: 1, color: 'lightpink', imgSrc: "" }
    */
  ];

  constructor(
    public changeDetectorRef: ChangeDetectorRef,
    public media: MediaMatcher
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 920px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  private _mobileQueryListener(): void {}

  ngOnInit(): void {}
}
