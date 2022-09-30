import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 3 },
    { name: 'Tom', type: 'Cat', age: 6 },
    { name: 'Frida', type: 'Dog', age: 10 },
    { name: 'Bob', type: 'Horse', age: 1 },
  ];

  animalDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${
      animal.age > 1 ? `${animal.age} anos` : `${animal.age} ano`
    } `;
  }
}
