import { Injectable } from '@nestjs/common';
import { runs } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RunsService {
    // CRUD

    private _prisma: PrismaService;

    constructor(prisma: PrismaService) {
        this._prisma = prisma
    }

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
