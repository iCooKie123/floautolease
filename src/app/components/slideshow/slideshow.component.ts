import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { KeenSliderInstance } from 'keen-slider';
import KeenSlider from 'keen-slider';
@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: [
    './slideshow.component.scss',
    '../../../../node_modules/keen-slider/keen-slider.min.css',
  ],
})
export class SlideshowComponent implements AfterViewInit, OnDestroy, OnInit {
  @ViewChild('sliderRef') sliderRef: ElementRef<HTMLElement> | undefined;
  @Input() images: string[] = [];
  slider: KeenSliderInstance | undefined = undefined;

  ngAfterViewInit() {
    this.slider = new KeenSlider(
      this.sliderRef!.nativeElement,
      {
        loop: true,
      },
      [
        (slider) => {
          let timeout: any;
          let mouseOver = false;
          function clearNextTimeout() {
            clearTimeout(timeout);
          }
          function nextTimeout() {
            clearTimeout(timeout);
            if (mouseOver) return;
            timeout = setTimeout(() => {
              slider.next();
            }, 2000);
          }
          slider.on('created', () => {
            slider.container.addEventListener('mouseover', () => {
              mouseOver = true;
              clearNextTimeout();
            });
            slider.container.addEventListener('mouseout', () => {
              mouseOver = false;
              nextTimeout();
            });
            nextTimeout();
          });
          slider.on('dragStarted', clearNextTimeout);
          slider.on('animationEnded', nextTimeout);
          slider.on('updated', nextTimeout);
        },
      ]
    );
    window.addEventListener('resize', this.handleResize);
  }
  ngOnInit(): void {
    document.dispatchEvent(new Event('resize'));
  }
  private handleResize = () => {
    if (this.slider) this.slider?.update();
  };

  ngOnDestroy() {
    if (this.slider) this.slider.destroy();
  }
}
