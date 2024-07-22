import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
    //local db

    private readonly songs = []

    create(song){
        return this.songs.push(song);
    }

    findAll(){
        // throw new Error('Error in fetching the records');
        return this.songs;
    }
}
