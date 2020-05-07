import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {
  formCadastro = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    email: new FormControl(''),
    telefone: new FormControl(''),
    endereco: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void { }

  cadastro() {
    localStorage.setItem('cadastro', JSON.stringify(this.formCadastro.value));
  }
}
