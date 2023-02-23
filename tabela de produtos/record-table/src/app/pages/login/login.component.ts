import { Component } from '@angular/core';
import { RecordTable } from 'src/app/core/api/models/record-table';
import { RecordTableService } from 'src/app/core/api/services/record-table.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private recordTable: RecordTableService, private router:Router) {}

  login: string = 'luanzampier';
  senha: string = 'zampr031';
  modalCadastro:boolean = false;
  val3!:any
  

  ngOnInit(): void {
    this.recordTable.usuarios().subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (error) => {},
    });

    this.recordTable.logarUsuario(this.login).subscribe({
      next: (result) => {
        if (result.id == this.login && result.password == this.senha) {
          console.log(
            result.nome,
            result.data_nascimento,
            result.cpf,
            result.telefone
          );
        }
      },
      error: (error) => {},
    });

  }

  Cadastrar(){
    this.modalCadastro = true
  }

  
}
