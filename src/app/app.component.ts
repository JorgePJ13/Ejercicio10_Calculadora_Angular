import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cabecera = 'Calculadora de Jorge Pando';
  num1!: number;
  num2!: number;
  resultado!: number;

  public suma() : void {
    this.resultado = this.num1 + this.num2;
  }

  public resta() : void {
    this.resultado = this.num1 - this.num2;
  }

  public multiplicacion() : void {
    this.resultado = this.num1 * this.num2;
  }

  public division() : void {
    this.resultado = this.num1 / this.num2;
  }

  public resto() : void {
    this.resultado = this.num1 % this.num2;
  }
}
