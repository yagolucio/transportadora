import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { Transport } from '../transport';

@Component({
  selector: 'app-transportes',
  templateUrl: './transportes.component.html',
  styleUrls: ['./transportes.component.scss']
})

export class TransportesComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'cnpj', 'inscricaoEstadual', 'latitude', 'longitude'];
  data: Transport[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {
  }

  ngOnInit() {
    this.api.allTransportes().subscribe(resp => {
      this.data = resp.collection;
      this.isLoadingResults = false;
    }, err => {
      console.log(err);
      this.isLoadingResults = false;
    })
  }

}
