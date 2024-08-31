import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  HostListener,
} from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @HostListener('window:resize', ['$event'])
  onResize(event: { target: { innerWidth: any } }) {
    this.changeDetectorRef.detectChanges();
  }

  darkThemeActive: Boolean = true;
  @HostBinding('class') componentCssClass = 'dark-theme';
  href: string = '';
  subscriptions: Subscription = new Subscription();
  mobileQuery: MediaQueryList;
  faceBookUrl: string = 'https://sv-se.facebook.com/eltjanstjonnyostbergab/';
  instagramUrl: string =
    'https://www.instagram.com/accounts/login/?next=/eltjanstjonnyostbergab/';

  constructor(
    public overlayContainer: OverlayContainer,
    public changeDetectorRef: ChangeDetectorRef,
    public router: Router,
    public location: Location,
    public media: MediaMatcher,
    public breakpointObserver: BreakpointObserver,
    private meta: Meta
  ) {
    this.toggleTheme();
    this.mobileQuery = media.matchMedia('(max-width: 1000px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  private _mobileQueryListener(): void {}

  ngOnInit(): void {
    const routerSub = this.router.events.subscribe((val) => {
      if (this.location.path() != '' || this.location.path() != this.href) {
        this.href = this.location.path();
        this.changeDetectorRef.detectChanges();
      } else {
        this.href = '/home';
        this.changeDetectorRef.detectChanges();
      }
    });
    this.subscriptions.add(routerSub);

    this.meta.addTags([
      {
        name: 'description',
        content:
          'Välkommen till Eltjänst Jonny Östberg AB, elektriker firma i Sandviken. Begär en kostnadsfri offert idag.',
      },
      {
        name: 'keywords',
        content: 'El, Elektriker, Storvik, Kungsgården, Åshammar, Jäderfors, Sandviken, Gävle, Årsunda, Hofors, Laddstolpe, Elinstallation, Jour',
      },
      { name: 'author', content: 'Eltjänst Jonny Östberg AB' },
      { property: 'og:title', content: 'Eltjänst Jonny Östberg AB' },
      {
        property: 'og:description',
        content:
          'Välkommen till Eltjänst Jonny Östberg AB, elektriker firma i Sandviken.',
      },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: 'sv_SE' },
      { property: 'og:url', content: 'https://www.eltjanstsandviken.se/' },
      { property: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1' }
    ]);
  }

  toggleTheme(): void {
    let theme: string = this.darkThemeActive ? 'dark-theme' : 'light-theme';
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    this.darkThemeActive = !this.darkThemeActive;
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    this.subscriptions.unsubscribe();
  }

  facebookClick() {
    window.open(this.faceBookUrl, '_blank');
  }

  instagramClick() {
    window.open(this.instagramUrl, '_blank');
  }
}
