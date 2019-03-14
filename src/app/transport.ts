export class Transport {
  id: number;
  nome: string;
  cnpj: string;
  inscricaoEstadual: string;
  latitude: number;
  longitude: number;
}

export class ResponseTransport {
  actualPage: number;
  collection: Transport[];
  collectionSize: number;
  pageSize: number
}
