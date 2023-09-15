import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('sliderRef')
  sliderRef!: ElementRef<HTMLElement>;
  currentSlide: number = 1;
  dotHelper: Array<Number> = [];
  slider: KeenSliderInstance | undefined;

  ngAfterViewInit() {
    setTimeout(() => {
      this.slider = new KeenSlider(this.sliderRef.nativeElement, {
        initial: this.currentSlide,
        mode: 'snap',
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
