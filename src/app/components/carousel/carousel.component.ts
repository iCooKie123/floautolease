import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import KeenSlider, { KeenSliderInstance } from 'keen-slider';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: [
    './carousel.component.scss',
    '../../../../node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class CarouselComponent {
  @ViewChild('sliderRef') sliderRef: any;
  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance | undefined = undefined;
  slides = [
    '../../../assets/4kimg/car_gray_wet_147750_3840x2160.jpg',
    '../../../assets/4kimg/car_sports_car_neon_157154_3840x2160.jpg',
    '../../../assets/4kimg/sports_car_drift_race_131217_3840x2160.jpg',
  ];

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        loop: true,
        mode: 'snap',
        initial: this.currentSlide,
        slideChanged: (s) => {
          this.currentSlide = s.track.details.rel;
        },
      });
      this.dotHelper = [
        ...Array(this.slider.track.details.slides.length).keys(),
      ];
    });
  }

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
