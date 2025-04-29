import { Controller, Get, Query } from "@nestjs/common";
import { WeatherService } from "./weather.service";
import { IParamWeather } from "./interfaces/w-params";

@Controller("weather")
export class WeatherController {
  constructor(private weatherService: WeatherService) {}

  @Get()
  async repositories(@Query() { place }: IParamWeather) {
    return await this.weatherService.searchWeather(place);
  }
}
