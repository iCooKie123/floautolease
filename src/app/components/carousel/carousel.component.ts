import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import KeenSlider, { KeenSliderInstance, TrackDetails } from 'keen-slider';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    '../../../../node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class CarouselComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sliderRef') sliderRef: any;
  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance | undefined = undefined;
  details: TrackDetails | undefined;
  opacities: number[] = [];
  slides = [
    `${environment.imagePath}/4kimg/car_gray_wet_147750_3840x2160.jpg`,
    `${environment.imagePath}/4kimg/car_sports_car_neon_157154_3840x2160.jpg`,
    `${environment.imagePath}/4kimg/sports_car_drift_race_131217_3840x2160.jpg`,
  ];

  scaleStyle(idx: number) {
    if (!this.details) return {};
    const slide = this.details.slides[idx];
    const scale_size = 0.7;
    const scale = 1 - (scale_size - scale_size * slide.portion);
    return {
      transform: `scale(${scale})`,
      WebkitTransform: `scale(${scale})`,
    };
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: 'snap',
        renderMode: 'performance',
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
        detailsChanged: (s) => {
          this.opacities = s.track.details.slides.map((slide) => slide.portion);
        },
      });
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ];
    });
    window.addEventListener('resize', this.handleResize);
  }

  ngOnInit(): void {
    document.dispatchEvent(new Event('resize'));
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.handleResize);
    if (this.slider) this.slider.destroy();
  }
  private handleResize = () => {
    if (this.slider) this.slider?.update();
  };
}
