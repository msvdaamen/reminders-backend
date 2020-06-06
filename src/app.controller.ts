import {Controller, Get, Req} from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  async getHello(@Req() req) {
    return 'hallo';
  }
}
