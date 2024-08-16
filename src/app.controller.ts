import { Controller, Get, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { Response as ResponseExpress } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Response() res: ResponseExpress): Promise<string> {
    this.appService.getHello(res);
    return Promise.resolve('good');
  }
}
