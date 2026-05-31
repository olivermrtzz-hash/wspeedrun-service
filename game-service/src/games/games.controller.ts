import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { GamesService } from './games.service';
import { gameCreateDTO } from './dtos/gameCreateDTO';
import { UseGuards } from '@nestjs/common';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller()
export class GamesController {
    private _gameService: GamesService;
    constructor(gameService: GamesService){
        this._gameService = gameService;
    }

    @Get('games')
    getGames(){
       return this._gameService.getGames(); 
    }

    @Get('games/:id')
    getGameById(@Param('id') game_id: string){
        return this._gameService.getGameById(game_id);
    }

    @UseGuards(RolesGuard, JwtAuthGuard)
    @Post('admin/games')
    createGame(@Body() game: gameCreateDTO){
        return this._gameService.createGame(game);
    }

    @UseGuards(RolesGuard, JwtAuthGuard)
    @Patch('admin/games/:id/update')
    updateGame(@Param('id') game_id: string, @Body() updatedGame: Partial<gameCreateDTO>){
        return this._gameService.updateGame(game_id, updatedGame)
    }

    @UseGuards(RolesGuard, JwtAuthGuard)
    @Delete('admin/games/:id/delete')
    deleteGame(@Param('id') game_id: string){
        return this._gameService.deleteGame(game_id)
    }
}
