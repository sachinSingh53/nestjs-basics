import { Body, Controller, Get, Post, Req } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";


@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){}

    @Get('health')
    health(){
        return {health:'Ok and running'}
    }

    @Post('signup')
    signUp(@Body() dto:AuthDto){

        return this.authService.signUp(dto);
    }

    @Post('login')
    signIn(@Body() dto:AuthDto){
        return this.authService.login(dto);
    }
}