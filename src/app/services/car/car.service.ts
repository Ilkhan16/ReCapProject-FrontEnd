import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { ListResponseModel } from 'src/app/models/listResponseModel';
import { SingleResponseModel } from 'src/app/models/singleResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
apiUrl="https://localhost:7269/api/Cars"

  constructor(private httpClient:HttpClient) { }

  getCar(): Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl+'/getcardetails'
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl+'/getbybrandid?brandId='+brandId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<CarDetailDto>> {
    let newPath=this.apiUrl+"/getbycolorid?colorId="+colorId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newPath);
  }
  getCarDetailsById(carId:number): Observable<ListResponseModel<CarDetailDto>>{
    let newUrl:string = this.apiUrl+'/getbyid?carId='+carId
    return this.httpClient.get<ListResponseModel<CarDetailDto>>(newUrl)
  }
  
}

