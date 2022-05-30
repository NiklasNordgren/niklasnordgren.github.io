import {
  BreakpointObserver,
  Breakpoints,
  MediaMatcher,
} from '@angular/cdk/layout';
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
  textOverImage: string;
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

  cols: number | undefined;
  gridByBreakpoint = {
    xl: 8,
    lg: 8,
    md: 8,
    sm: 4,
    xs: 2,
  };
  mobileQuery: MediaQueryList;

  tiles: Tile[] = [
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job19_garage.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job20_garage.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job21_floor_heating.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job23_spotlights.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job24_church.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job25_circuits.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job17_facade.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job1_elgiganten.jpg',
      textOverImage: '',
    },
    {
      cols: 1,
      rows: 4,
      imgSrc: './../assets/job4_stairs.jpg',
      textOverImage: '',
    },
    {
      cols: 3,
      rows: 4,
      imgSrc: './../assets/job15_cabinet.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job16_cross.jpg',
      textOverImage: '',
    },

    {
      cols: 1,
      rows: 4,
      imgSrc: './../assets/job2_bathroom.jpg',
      textOverImage: '',
    },
    {
      cols: 1,
      rows: 4,
      imgSrc: './../assets/job8_floor_heating.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job11_bathroom.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job12_circuits.jpg',
      textOverImage: '',
    },

    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job18_circuits.jpg',
      textOverImage: '',
    },
    /*
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job6_room.jpg',
      textOverImage: '',
    },
    */
    //{ text: ':)', cols: 4, rows: 2, color: '#DDBDF1', imgSrc: "./../assets/job13_living_room.jpg" },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job14_kitchen.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job22_floor_heating.jpg',
      textOverImage: '',
    },
    {
      cols: 2,
      rows: 4,
      imgSrc: './../assets/job5_water.jpg',
      textOverImage: '',
    },

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
    public media: MediaMatcher,
    private breakpointObserver: BreakpointObserver
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        if (result.matches) {
          if (result.breakpoints[Breakpoints.XSmall]) {
            this.cols = this.gridByBreakpoint.xs;
          }
          if (result.breakpoints[Breakpoints.Small]) {
            this.cols = this.gridByBreakpoint.sm;
          }
          if (result.breakpoints[Breakpoints.Medium]) {
            this.cols = this.gridByBreakpoint.md;
          }
          if (result.breakpoints[Breakpoints.Large]) {
            this.cols = this.gridByBreakpoint.lg;
          }
          if (result.breakpoints[Breakpoints.XLarge]) {
            this.cols = this.gridByBreakpoint.xl;
          }
        }
      });
  }

  private _mobileQueryListener(): void {}

  ngOnInit(): void {}
}
