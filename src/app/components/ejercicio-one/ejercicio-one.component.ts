import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-ejercicio-one',
  templateUrl: './ejercicio-one.component.html',
  styles: [
  ]
})
export class EjercicioOneComponent implements OnInit {

  @ViewChild("txtnombre") txtNombre: ElementRef;

  miLista: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  guardar(event: any){
    let nombre: string = event.target.value;
    if(nombre.trim().length == 0){
      alert("Ingrese un nombre en la caja de texto.");
      return;
    }
    if(this.existeItem(nombre)){
      alert("Este nombre ya existe.");
      return;
    }
    this.miLista.push(nombre);
    this.txtNombre.nativeElement.value = "";
    this.txtNombre.nativeElement.focus();
  }

  existeItem(value: string){
    for(let i = 0; i < this.miLista.length; i++){
      if(value.trim().toUpperCase() == this.miLista[i].trim().toUpperCase()){
        return true;
      }
    }

    return false;
  }

  eliminar(index: number){
    if(confirm("Desea eliminar este registro?")){
      this.miLista.splice(index, 1);
    }
  }

}
