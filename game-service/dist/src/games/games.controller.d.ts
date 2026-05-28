import { GamesService } from './games.service';
import { gameCreateDTO } from './dtos/gameCreateDTO';
export declare class GamesController {
    private _gameService;
    constructor(gameService: GamesService);
    getGames(): gameCreateDTO[];
    getGameById(game_id: string): gameCreateDTO | null;
    createGame(game: gameCreateDTO): {
        message: string;
    };
    updateGame(game_id: string, updatedGame: Partial<gameCreateDTO>): {
        message: string;
        updatedGame?: undefined;
    } | {
        message: string;
        updatedGame: gameCreateDTO;
    };
    deleteGame(game_id: string): {
        message: string;
    };
}
