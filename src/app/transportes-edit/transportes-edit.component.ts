import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';


@Component({
  selector: 'app-transportes-edit',
  templateUrl: './transportes-edit.component.html',
  styleUrls: ['./transportes-edit.component.scss']
})

export class TransportesEditComponent implements OnInit {
  transportForm: FormGroup;
  id: number;
  nome: string = '';
  cnpj: string = '';
  inscricaoEstadual: string = '';
  latitude: number;
  longitude: number;
  isLoadingResults = false;

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.api.getTransportes(this.id).subscribe(resp => {

      let transporte = resp;

      this.transportForm.setValue({
        nome: transporte.nome,
        cnpj: transporte.cnpj,
        inscricaoEstadual: transporte.inscricaoEstadual,
        latitude: transporte.latitude,
        longitude: transporte.longitude,
      })
    });
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
    console.log(this.id)
    this.api.updateTransporte(this.id, form)
      .subscribe(res => {
        this.isLoadingResults = false;
        this.router.navigate(['/']);
      }, (err) => {
        console.log(err);
        this.isLoadingResults = false;
      }
      );
  }

}
