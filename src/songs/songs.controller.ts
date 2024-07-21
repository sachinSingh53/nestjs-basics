import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put } from '@nestjs/common';
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
    findById(){
        return 'endpoint to findBy Id'
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
