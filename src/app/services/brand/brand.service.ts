import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { Brand } from 'src/app/models/brand/brand';

@Injectable({
  providedIn: 'root',
})
export class BrandService {
apiUrl = 'https://localhost:7269/api/Brands/getall';

  constructor(private httpClient: HttpClient) {}

  getBrand(): Observable<ListResponseModel<Brand>> {
    return this.httpClient.get<ListResponseModel<Brand>>(this.apiUrl);
  }
}