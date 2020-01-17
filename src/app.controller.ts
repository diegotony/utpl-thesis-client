import { Controller, Get, HttpCode } from "@nestjs/common";
import { ApiImplicitParam, ApiUseTags } from "@nestjs/swagger";

@ApiUseTags("service")
@Controller()
export class AppController {
  @Get("")
  @HttpCode(200)
  async hello() {
    return { service: { status: true } };
  }
}
