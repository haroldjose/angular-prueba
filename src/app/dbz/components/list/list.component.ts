import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList:Character[]=[{
    name:'Trunks',
    power:10
  }]

  @Output()
  // onDelete: EventEmitter<number>= new EventEmitter();
  onDelete: EventEmitter<string>= new EventEmitter();

  // onDeleteCharacter(index:number):void{
  //   //todo:emitir el id del personaje
  //   console.log(index);
  //   this.onDelete.emit(index);
  // }
  onDeleteCharacter(id?:string):void{
    if(!id) return;
    this.onDelete.emit(id);
  }

  
}
