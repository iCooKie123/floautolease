import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  imgArray: string[] = [
    `${environment.imagePath}/background/1.jpeg`,
    `${environment.imagePath}/background/2.jpeg`,
    `${environment.imagePath}/background/3.jpeg`,
  ];
}
