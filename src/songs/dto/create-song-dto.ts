import { IsArray, IsDateString, IsMilitaryTime, IsNotEmpty, IsString } from "class-validator";

export class CreateSongDTO{
    @IsString()
    @IsNotEmpty()
    readonly title:string;

    @IsNotEmpty()
    @IsArray()
    @IsString({each:true})
    readonly artist:string;

    @IsNotEmpty()
    @IsDateString()
    readonly releasedDate:Date;

    @IsMilitaryTime()
    @IsNotEmpty()
    readonly duration:Date;
}