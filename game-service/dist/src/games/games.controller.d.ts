import { GamesService } from './games.service';
export declare class GamesController {
    private _gameService;
    constructor(gameService: GamesService);
    getGames(): gameCreateDTO[];
    getGameById(game_id: string): any;
}
