import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RunsService {
    // CRUD

    private _prisma: PrismaService;

    constructor(prisma: PrismaService) {
        this._prisma = prisma
    }
}
