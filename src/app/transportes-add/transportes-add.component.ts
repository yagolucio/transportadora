import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-transportes-add',
  templateUrl: './transportes-add.component.html',
  styleUrls: ['./transportes-add.component.scss']
})

export class TransportesAddComponent implements OnInit {
  transportForm: FormGroup;
  nome: string;
  cnpj: string;
  inscricaoEstadual: string;
  latitude: number;
  longitude: number;
  isLoadingResults = false;

  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.transportForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'cnpj': [null, Validators.required],
      'inscricaoEstadual': [null, Validators.required],
      'latitude': [null, Validators.required],
      'longitude': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addTransportes(form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
