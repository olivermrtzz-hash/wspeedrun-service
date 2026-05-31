import { Injectable } from '@nestjs/common';
import { Prisma, runs } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { runCreateDTO } from './dtos/runCreateDTO';

@Injectable()
export class RunsService {
    // CRUD

    private _prisma: PrismaService;
    // private _gameService: 

    constructor(prisma: PrismaService) {
        this._prisma = prisma
    }

    // Run logic
    // getRunsByCategory(id: string): Promise<runs[]> {
    //     return this._prisma.runs.findMany({
    //         where: {
    //             run_category_id: id
    //         }
    //     })
    // }

    // Run logic
    getRunsByUser(id: string): Promise<runs[]> {

        return this._prisma.runs.findMany({
            where: {
                user_id: id
            }
        })
    }

    // async createNewRunEntry(body: runCreateDTO): Promise<runs>{

        // const doesExistCategory = 

        // const id = await this._prisma.runs.findUnique({
        //     where: {
        //         run_category_id: body.run_category_id
        //     }
        // });

        // return this._prisma.runs.create({
        //     data: body as Prisma.runsCreateInput,
        // })
    // }

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
