export declare class GamesService {
    gamesList: Array<gameCreateDTO>;
    getGames(): gameCreateDTO[];
    getGameById(id: string): any;
}
