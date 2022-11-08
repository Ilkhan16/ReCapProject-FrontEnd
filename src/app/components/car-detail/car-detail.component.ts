import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetailDto } from 'src/app/models/car/carDetailDto';
import { CarImage } from 'src/app/models/carImage/carImage';
import { CarService } from 'src/app/services/car/car.service';
import { CarImageService } from 'src/app/services/carImage/car-image.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  carDetails: CarDetailDto[] = [];
  carImages: CarImage[];
  defpng = true;
  currentImage: CarImage;
  imageUrl = 'https://localhost:7269/Uploads/Images/';
  constructor(
    private carDetailService: CarService,
    private carImageService: CarImageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetailsById(params['carId']);
        this.getImageByCarId(params['carId']);
      }
    });
  }

  getCarDetailsById(carId: number) {
    this.carDetailService.getCarDetailsById(carId).subscribe((response) => {
      this.carDetails = response.data;
    });
  }

  getImageByCarId(carId: number) {
    this.carImageService.getCarImageByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }

  getButtonClass(image: CarImage) {
    if (image === this.carImages[0]) {
      return 'active';
    } else {
      return '';
    }
  }

  getCurrentImageClass(image: CarImage) {
    if (this.carImages[0] == image) {
      return 'carousel-item active';
    } else {
      return 'carousel-item ';
    }
  }

  setCurrentImageClass(image: CarImage) {
    this.currentImage = image;
  }

  getCarImage(carImage: CarImage, carId: number) {
    if (carImage.carId == 0) {
      this.defpng=false
      let path = this.imageUrl + 'Default2.png';
      return path;

    } else {
      let path = this.imageUrl + carImage.imagePath;
      return path;
    }
  }
}
