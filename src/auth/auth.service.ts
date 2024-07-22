import { Injectable } from "@nestjs/common";
import {User,Bookmank} from "@prisma/client"
@Injectable()
export class AuthService{
    login(){
        return 'I am login'
    }
    signUp(){
        return 'I am signUp'
    }
}