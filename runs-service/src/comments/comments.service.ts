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

    createNewComment(body: commentCreateDTO): Promise<comments> {
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
