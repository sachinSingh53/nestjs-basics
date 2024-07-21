import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';
import{SongsService} from './songs.service'
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService:SongsService){}
    @Get()
    findAll(){
        return this.songsService.findAll();
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
