import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from 'src/app/models/carImage/carImage';
import { ListResponseModel } from 'src/app/models/listResponseModel';


@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = 'https://localhost:7269/api/CarImages/';

  constructor(private httpClient: HttpClient) {}

  getCarImageByCarId(id:number):Observable<ListResponseModel<CarImage>>{
    let newUrl:string = this.apiUrl + "getbycarid?carId=" + id;
    return this.httpClient.get<ListResponseModel<CarImage>>(newUrl);
  }}
