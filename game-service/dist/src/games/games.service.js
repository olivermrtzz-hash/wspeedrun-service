"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
let GamesService = class GamesService {
    gamesList = [
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
    ];
    getGames() {
        return this.gamesList;
    }
    getGameById(id) {
        const game = this.gamesList.find(t => t.game_id === id);
        return game ?? null;
    }
    createGame(game) {
        this.gamesList.push(game);
    }
    updateGame(id, updatedGame) {
        const game = this.gamesList.find(t => t.game_id === id);
        if (!game) {
            return {
                message: 'Game does not exist'
            };
        }
        if (updatedGame.game_name) {
            game.game_name = updatedGame.game_name;
        }
        if (updatedGame.description) {
            game.description = updatedGame.description;
        }
    }
    deleteGame(id) {
        const game = this.gamesList.find(t => t.game_id === id);
        if (!game) {
            return {
                message: 'Game does not exist'
            };
        }
        this.gamesList = this.gamesList.filter(t => t.game_id === id);
        return {
            message: 'Game has been deleted successfully'
        };
    }
};
exports.GamesService = GamesService;
exports.GamesService = GamesService = __decorate([
    (0, common_1.Injectable)()
], GamesService);
//# sourceMappingURL=games.service.js.map