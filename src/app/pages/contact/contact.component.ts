import { Component } from '@angular/core';

interface ContactSection {
  title: string;
  description: string[];
  icon: string;
}
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactSections: ContactSection[] = [
    {
      title: 'Telefon',
      description: ['tel:0722 123 456'],
      icon: 'phone',
    },
    {
      title: 'Email',
      description: ['mailto:mailHere'],
      icon: 'email',
    },
    {
      title: 'Program de Lucru',
      description: [
        'Luni - Vineri: 09:00 - 18:00',
        'Sambata: 09:00 - 14:00',
        'Duminica: Inchis',
      ],
      icon: 'calendar_today',
    },
  ];
}
