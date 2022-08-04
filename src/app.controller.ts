import { Controller, Get } from '@nestjs/common';

@Controller('/app')
export class AppController {
  @Get('/ask')
  getRootRoute() {
    return 'hello there from nest';
  }

  @Get('/hi-bye')
  getBye() {
    return 'by there';
  }
}
