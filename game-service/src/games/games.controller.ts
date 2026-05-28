import { Controller, Get, Param } from '@nestjs/common';
import { GamesService } from './games.service';

@Controller('games')
export class GamesController {
    private _gameService: GamesService;
    constructor(gameService: GamesService){
        this._gameService = gameService;
    }

    @Get()
    getGames(){
       return this._gameService.getGames(); 
    }

    @Get(':id')
    getGameById(@Param('id') game_id: string){
        return this._gameService.getGameById(game_id);
    }


}
