import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {LocalStragety} from "./local.stragety";
import {PassportModule} from "@nestjs/passport";
import {jwtConstants} from "./constants";
import { JwtModule } from '@nestjs/jwt';
import {JwtStrategy} from "./jwt.stragety";
import { AuthResolver } from './auth.resolver';
import {UserModule} from "../../user/user.module";

@Module({
  imports: [
    UserModule,
      PassportModule.register({ defaultStrategy: 'jwt' }),
      JwtModule.register({
          secret: jwtConstants.secret,
          signOptions: { expiresIn: '60m' },
      }),
  ],
  providers: [
      AuthService,
      LocalStragety,
      JwtStrategy,
      AuthResolver
  ]
})
export class AuthModule {}
