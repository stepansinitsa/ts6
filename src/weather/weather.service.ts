import { Injectable } from '@nestjs/common';
import {
    firstValueFrom,
    from,
    map,
    Observable,
  } from "rxjs";
  import axios from "axios";

@Injectable()
export class WeatherService {

    private readonly weatherURL = "http://api.weatherapi.com/v1/current.json?key=";

    private getWeather(place: string): Observable<any> {
    
        const full_url = `${this.weatherURL}${process.env.APIKey}&q=${place}&aqi=no`
        return from(axios.get(full_url))
            .pipe(
                map((res: any) => res.data)     
            ) 
    }
  
    async searchWeather(place: string): Promise<any> {
        const data$ = this.getWeather(place).pipe()
        data$.subscribe(() => {})
        return await firstValueFrom(data$)
    }
}
