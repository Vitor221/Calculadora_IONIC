// funcionalidades e lógicas

import { Component } from '@angular/core'; 

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() {}
  //  defini escopo declarei defini tipo e atribui valor inicial
  private num : number = 0;
  private num2 : number = 0;
  private campo : number = 0;
  visor : string = "0";
  visorFormat : number = 0;

limpar(){
  this.num = 0;
  this.num2 = 0;
  this.visor = "0";
}

entrarComDados (numero: number){
  this.num = numero
  if(numero){
    this.visor = this.visor.replace(/0/g, '');
  }
  this.visor += this.num
}

entrarComOperacao(operacao: string){
  console.warn('entrarComOperacao', operacao)
  this.visor += operacao
};

calcular(){
  if(this.visor){
    this.visorFormat = eval(this.visor);
    this.visor = this.visorFormat.toString();
    console.log(this.visorFormat);
  }
}
}
