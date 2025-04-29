import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { RxjsModule } from "./rxjs/rxjs.module";
import { WeatherService } from './weather/weather.service';
import { WeatherController } from './weather/weather.controller';
import { WeatherModule } from './weather/weather.module';
import * as dotenv from "dotenv";
import * as path from 'path'

@Module({
  imports: [RxjsModule, WeatherModule],
  controllers: [AppController, WeatherController],
  providers: [AppService, WeatherService],
})
export class AppModule {
  constructor(){
    let env_path = path.join(__dirname, "..", ".env")
    dotenv.config({ path: env_path }); 
  }
}
