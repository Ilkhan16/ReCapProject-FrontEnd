import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  carDetail: CarDetailDto[] = [];
  currentCar: CarDetailDto;
  dataLoaded = false;
  imageUrl = 'https://localhost:7269/Uploads/Images/';
  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } 
      else if(params['colorId']){
        this.getCarsByColor(params['colorId']);
      }
       else {
        this.getCar();
      }
    });
  }

  getCar() {
    this.carService.getCar().subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByBrand(brandId:number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId:number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.carDetail = response.data;
      this.dataLoaded = true;
    });
  }

    setCurrentCar(car:CarDetailDto){
      this.currentCar=car
   }
   getCarImage(imageee: CarDetailDto, carId: number) {
    if (imageee.imagePath == null) {
      let path = this.imageUrl + 'Default2.png';
      return path;

    } else {
      let path = this.imageUrl + imageee.imagePath;
      return path;
    }
  }
  }
