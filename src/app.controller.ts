import { Controller, Get, HttpCode } from "@nestjs/common";

@Controller()
export class AppController {
  @Get("hello")
  @HttpCode(200)
  async hello() {
    return { service: { status: true } };
  }
}
