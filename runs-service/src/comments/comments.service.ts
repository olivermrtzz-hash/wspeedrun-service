import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { commentCreateDTO } from './dtos/commentCreateDTO/commentCreateDTO';
import { comments, Prisma } from '@prisma/client';

@Injectable()
export class CommentsService {

    private _prisma: PrismaService;

    constructor(prisma: PrismaService) {
        this._prisma = prisma
    }

    async createNewComment(body: commentCreateDTO): Promise<comments> {

        const runId = await body.run_id
        const userId = await body.user_id

        if(!runId || !userId) {
            throw new Error('run ID or user ID cannot be empty')
        }

        return this._prisma.comments.create({
            data: body as Prisma.commentsCreateInput
        })
    }

    deleteComment(id: string): Promise<comments> {
        return this._prisma.comments.delete({
            where: {
                comment_id: id
            }
        })
    }
}
