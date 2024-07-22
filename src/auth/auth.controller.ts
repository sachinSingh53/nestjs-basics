import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}

    @Get('health')
    health(){
        return {health:'Ok and running'}
    }

    @Post('signup')
    signUp(){
        return this.authService.signUp();
    }

    @Post('login')
    signIn(){
        return this.authService.login();
    }
}