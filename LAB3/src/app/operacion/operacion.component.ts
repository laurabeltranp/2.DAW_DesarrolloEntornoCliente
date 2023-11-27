import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.css']
})
export class OperacionComponent implements OnInit {

  numero1 : number
  numero2 : number
  resultado : number

  operacionPermitida : string
  operacionNoPermitida : string

  constructor() { 
    this.numero1 = 0;
    this.numero2 = 0;
    this.resultado = 0;

    this.operacionPermitida = "display:none";
    this.operacionNoPermitida = "display : none";
  }

  ngOnInit(): void {
  }


  public sumar () : void {
    if (this.comprobarCeros()){
      this.mostrarNoPermitidos();
    } else {
      this.mostrarPermitidos()
      this.resultado = this.numero1 + this.numero2;
    }
  }
  public restar() : void {
    if (this.comprobarCeros()){
      this.mostrarNoPermitidos();
    } else {
      this.mostrarPermitidos();
      this. resultado = this.numero1 - this.numero2
    }
  }
  public multiplicar() : void {
    if (this.comprobarCeros()){
      this.mostrarNoPermitidos();
    } else {
      this.mostrarPermitidos();
      this. resultado = this.numero1 * this.numero2
    }
  }
  public dividir() : void {
    if (this.comprobarCeros()){
      this.mostrarNoPermitidos();
    } else {
      this.mostrarPermitidos();
      this. resultado = this.numero1 / this.numero2
    }
  }

  private comprobarCeros(){
    if (this.numero1 == 0 || this.numero2 == 0){
      return true
    } else{
      return false
    }
  }

  private mostrarPermitidos(){
    console.log("mostrarPermitida");
    this.operacionPermitida = "display : block"
    this.operacionNoPermitida = "display : none"
  }

  private mostrarNoPermitidos(){
    this.operacionPermitida = "display : none";
    this.operacionNoPermitida = "display : block";
  }
}
