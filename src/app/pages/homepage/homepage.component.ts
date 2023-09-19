import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent {
  imgArray: string[] = [
    `${environment.imagePath}/background/1.webp`,
    `${environment.imagePath}/background/2.webp`,
    `${environment.imagePath}/background/3.webp`,
  ];

  descriere: string = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus numquam nihil aperiam enim, assumenda praesentium
dolorem, tempore officia necessitatibus officiis blanditiis omnis iste rem consequuntur impedit est odit pariatur
deleniti?
Cum non, atque error rem, magnam harum expedita, impedit facilis debitis sequi quis adipisci aperiam officiis doloremque
ea sunt officia provident quas? Obcaecati sed quam maxime, explicabo veritatis beatae fuga.
Omnis iste provident, temporibus aspernatur soluta molestias animi aliquam, et minus odio ex. Architecto commodi vel
nulla, maiores blanditiis nihil id inventore quo quia quidem, incidunt hic? Corrupti, eum necessitatibus!`;
}
