import { Component } from "@angular/core";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transfer.component.html',
    styleUrls: ['./nova-transfer.component.scss']
})
export class NovaTransferComponent{

  valor: number;
  destino: number;

  transferir(){
    console.log('Solicitado Nova Transferência');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);
  }
}
