import { ChangeDetectorRef, Component, HostBinding } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  darkThemeActive: Boolean = true;
  @HostBinding('class') componentCssClass = 'dark-theme';
  href: string = '';
  subscriptions: Subscription = new Subscription();
  mobileQuery: MediaQueryList;

  constructor(
    public overlayContainer: OverlayContainer,
    public changeDetectorRef: ChangeDetectorRef,
    public router: Router,
    public location: Location,
    public media: MediaMatcher,
  ) {
    this.toggleTheme();
    this.mobileQuery = media.matchMedia('(max-width: 920px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
  }

  private _mobileQueryListener(): void {

  };

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
  }

  toggleTheme(): void {
    let theme: string = this.darkThemeActive ? 'dark-theme' : 'light-theme';
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
    this.darkThemeActive = !this.darkThemeActive;
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }
}
