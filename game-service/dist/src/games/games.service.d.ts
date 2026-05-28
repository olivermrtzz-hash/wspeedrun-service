import { gameCreateDTO } from './dtos/gameCreateDTO';
export declare class GamesService {
    gamesList: Array<gameCreateDTO>;
    getGames(): gameCreateDTO[];
    getGameById(id: string): gameCreateDTO | null;
    createGame(game: any): void;
    updateGame(id: string, updatedGame: Partial<gameCreateDTO>): {
        message: string;
    } | undefined;
    deleteGame(id: string): {
        message: string;
    };
}
