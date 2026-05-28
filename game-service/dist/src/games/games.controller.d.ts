import { GamesService } from './games.service';
import { gameCreateDTO } from './dtos/gameCreateDTO';
export declare class GamesController {
    private _gameService;
    constructor(gameService: GamesService);
    getGames(): gameCreateDTO[];
    getGameById(game_id: string): gameCreateDTO | null;
    createGame(game: any): void;
    updateGame(game_id: string, updatedGame: Partial<gameCreateDTO>): {
        message: string;
    } | undefined;
    deleteGame(game_id: string): {
        message: string;
    };
}
