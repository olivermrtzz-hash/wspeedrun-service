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

    async createNewComment(body: commentCreateDTO, authenticatedUser: any): Promise<{ message: string; data: comments }> {

        const runId = await body.run_id
        const userId = await body.user_id

        if(!runId || !userId) {
            throw new Error('run ID or user ID cannot be empty')
        }

        if(userId !== authenticatedUser.id) {
            throw new Error('User ID does not match authenticated user')
        }

        const createdComment = await this._prisma.comments.create({
            data: body as Prisma.commentsCreateInput
        })

        return {
            message: 'Comment created successfully',
            data: createdComment
        }
    }

    deleteComment(id: string, authenticatedUser: any): Promise<comments> {

        const comment = this._prisma.comments.findUnique({
            where: {
                comment_id: id
            }
        })

        if(comment != authenticatedUser.comment_id) {
            throw new Error('Not the correct comment owner')
        }

        return this._prisma.comments.delete({
            where: {
                comment_id: id
            }
        })
    }
}
