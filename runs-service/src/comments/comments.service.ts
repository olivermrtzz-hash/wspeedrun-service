import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { commentCreateDTO } from './dtos/commentCreateDTO/commentCreateDTO';

@Injectable()
export class CommentsService {

    constructor(private readonly _prisma: PrismaService) {}

    async createNewComment(body: commentCreateDTO, authenticatedUserId: string) {
        const runExists = await this._prisma.comments.findFirst({
            where: { run_id: body.run_id }
        });
        // Optional: validate run exists via fetch to runs or just trust the FK

        if (body.user_id !== authenticatedUserId) {
            throw new UnauthorizedException('User ID does not match authenticated user');
        }

        if (!body.run_id || !body.user_id || !body.comment) {
            throw new Error('run_id, user_id, and comment cannot be empty');
        }

        return this._prisma.comments.create({
            data: {
                comment_id: crypto.randomUUID(),
                run_id: body.run_id,
                user_id: body.user_id,
                comment: body.comment,
                created_at: new Date(),
            }
        });
    }

    async deleteComment(id: string, authenticatedUser: { userId: string }) {
        const comment = await this._prisma.comments.findUnique({
            where: { comment_id: id }
        });

        if (!comment) {
            throw new NotFoundException('Comment not found');
        }

        if (comment.user_id !== authenticatedUser.userId) {
            throw new UnauthorizedException('You can only delete your own comments');
        }

        return this._prisma.comments.delete({
            where: { comment_id: id }
        });
    }
}