import { Injectable } from '@nestjs/common';

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
}
