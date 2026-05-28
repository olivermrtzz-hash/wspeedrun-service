import { Injectable } from '@nestjs/common';
import { gameCreateDTO } from './dtos/gameCreateDTO';

@Injectable()
export class GamesService {
    gamesList: Array <gameCreateDTO> =  [
        {
            game_id: '1',
            game_name: 'Star Wars Jedi Knight: Jedi Academy',
            description: 'The best combat mechanic in Star Wars game.'
        },
        {
            game_id: '2',
            game_name: 'Need For Speed: Most Wanted (2005)',
            description: 'Street racing.'
        },
        {
            game_id: '3',
            game_name: 'Tokyo Xtreme Racer 2025',
            description: 'Street racing but in Japan'
        }
    ]

    getGames(){
        return this.gamesList;
    }

    getGameById(id: string)
    {
        const game = this.gamesList.find(t => t.game_id === id);
        return game ?? null;
    }

    createGame(game){
        this.gamesList.push(game)
    }

    updateGame(id: string, updatedGame: Partial<gameCreateDTO>){
        const game = this.gamesList.find(t => t.game_id === id);

        if (!game){
            return {
                message: 'Game does not exist'
            };
        }

        if (updatedGame.game_name){
            game.game_name = updatedGame.game_name;
        }

        if (updatedGame.description){
            game.description = updatedGame.description;
        }
    }

    deleteGame(id: string){
        const game = this.gamesList.find(t => t.game_id === id);

        if (!game){
            return {
                message: 'Game does not exist'
            }
        }

        this.gamesList = this.gamesList.filter(t => t.game_id === id);

        return {
            message: 'Game has been deleted successfully'
        };
    }
}
