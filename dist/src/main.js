"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const config_1 = require("./config/config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('User Service')
        .setDescription('The service API description')
        .setVersion('1.0')
        .addTag('user')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api/users', app, document);
    await app.listen(config_1.default.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map