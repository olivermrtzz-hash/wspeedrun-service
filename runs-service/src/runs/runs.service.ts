import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, runs } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { runCreateDTO } from './dtos/runCreateDTO';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, NotFoundError } from 'rxjs';

@Injectable()
export class RunsService {
    // CRUD

    private _prisma: PrismaService;
    // private _gameService: 

    constructor(
        prisma: PrismaService,
        @Inject('GAME_SERVICE')
        private readonly gameService: ClientProxy
    ) {
        this._prisma = prisma
    }

    // Run logic
    async getRunsByCategory(id: string) {

        const doesExistCategory = await firstValueFrom(
            this.gameService.send(
                'validate_categoryId',
                id
            )
        );

        if(!doesExistCategory) {
            throw new NotFoundException('Category not found');
        }

        const games = await firstValueFrom(
            this.gameService.send(
                'retrieve-games',
                id
            )
        );

        // type runDetails = users & games

        return this._prisma.runs.findMany({
            where: {
                run_category_id: id,
                status: 'ACCEPTED'
            },
            orderBy: {
                run_duration: 'asc'
            }
        })
    }

    // Run logic
    getRunsByUser(id: string, authId: string): Promise<runs[]> {

        if(id != authId) {
            return this._prisma.runs.findMany({
                where: {
                    status: 'ACCEPTED'
                }
            })
        } else {
            return this._prisma.runs.findMany({
                where: {
                    user_id: id
                }
            })
        }
        
    }

    // getRunsDetails(id: string) {
    //     return this._prisma.runs.findUnique({
    //         where: {
    //             run_id: id
    //         }
    //     })
    // }

    async createNewRunEntry(body: runCreateDTO, userId: string): Promise<{ message: string, data: runs }>{

        const doesExistCategory = await firstValueFrom(
            this.gameService.send(
                'validate_categoryId',
                body.run_category_id
            )
        );

        if(!doesExistCategory) {
            throw new Error('run category Id does not exist')
        }

        const createdRun = await this._prisma.runs.create({
            data: {
                // user_id verified using jwt
                run_category_id: body.run_category_id,
                vod_url: body.vod_url,
                run_duration: body.run_duration,
                status: 'PENDING',
                user_id: userId
            }
        })

        return {
            message: 'Successfully created a new run entry',
            data: createdRun
        }
    }

    // Run management logic
    getRunsByStatus(status: string): Promise<runs[]> {
        return this._prisma.runs.findMany({
            where: {
                status: status,
            }
        })
    }

    updateRunStatus(runId: string, status: string): Promise<runs> {
        return this._prisma.runs.update({
            data: {
                status: status
            },
            where: {
                run_id: runId
            }
        });
    }
}
