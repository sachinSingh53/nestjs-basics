import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import{SongsService} from './songs.service'
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService:SongsService){}
    @Get()
    findAll(){
        try{
            return this.songsService.findAll();
        }catch(err){
            throw new HttpException(
                'server Error',
                HttpStatus.BAD_REQUEST,
                {
                    cause: err
                }
            )
        }
        
    }

    @Get(':id')
    findById(
        @Param('id',ParseIntPipe)
        id:Number,
    ){
        
        
        return `findBy Id ${typeof id}`
    }

    @Put()
    Update(){
        return 'endpoint to update '
    }
    
    @Delete()
    Delete(){
        return 'endpoint to delete'
    }
    @Post()
    Create(@Body() createSongDTO:CreateSongDTO){
        return this.songsService.create(createSongDTO);
    }
}
