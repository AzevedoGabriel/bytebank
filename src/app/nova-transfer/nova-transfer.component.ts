import { Component, EventEmitter, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../model/transferencia.model";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector:'app-nova-transferencia',
    templateUrl: './nova-transfer.component.html',
    styleUrls: ['./nova-transfer.component.scss']
})
export class NovaTransferComponent{

  @Output() aoTransferir = new EventEmitter<any>();

  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) {}

  transferir(){
    console.log('Solicitado Nova Transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(result => {
      console.log(result);
      this.limparCampos();
      this.router.navigateByUrl('extrato');
    },
    error => console.error(error)
    );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
