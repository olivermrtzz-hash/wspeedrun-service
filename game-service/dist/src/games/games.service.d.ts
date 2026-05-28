import { gameCreateDTO } from './dtos/gameCreateDTO';
export declare class GamesService {
    gamesList: Array<gameCreateDTO>;
    getGames(): gameCreateDTO[];
    getGameById(id: string): gameCreateDTO | null;
    createGame(game: any): {
        message: string;
    };
    updateGame(id: string, updatedGame: Partial<gameCreateDTO>): {
        message: string;
        updatedGame?: undefined;
    } | {
        message: string;
        updatedGame: gameCreateDTO;
    };
    deleteGame(id: string): {
        message: string;
    };
}
