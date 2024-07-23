import { ForbiddenException, Injectable } from "@nestjs/common";
import { User, Bookmark } from "@prisma/client"
import { PrismaService } from "../prisma/prisma.service"
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { isInstance } from "class-validator";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService) { }
    async login(dto: AuthDto) {
        const user = await this.prisma.user.findUnique({
            where:{
                email: dto.email
            }
        })

        if(!user){
            throw new ForbiddenException('Invalid Creds');
        }

        const pwMatch = await argon.verify(user.hash,dto.password);
        if(!pwMatch) throw new ForbiddenException('Incorrect Creds');

        delete user.hash;
        return user;
    }
    async signUp(dto: AuthDto) {
        try {
            const hash = await argon.hash(dto.password);
            const user = await this.prisma.user.create({
                data: {
                    email: dto.email,
                    hash,
                    firstName: dto.firstName,
                    lastName: dto.lastName
                }


            })

            delete user.hash;

            return user;
        } catch (error) {
            if(error instanceof PrismaClientKnownRequestError){
                if(error.code === 'P2002'){
                    throw new ForbiddenException('Credentials taken')
                }
            }
        }
    }
}