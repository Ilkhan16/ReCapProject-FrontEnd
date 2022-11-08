import { CarImage } from "../carImage/carImage";
export interface CarDetailDto {
  carId: number;
  brandId: number;
  colorId: number;
  carName: string;
  brandName: string;
  colorName: string;
  dailyPrice: number;
  modelYear:number
  description:string
  imagePath:string
}