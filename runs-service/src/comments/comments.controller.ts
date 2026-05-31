import { Body, Controller, Delete, Param, Post, Request, UseGuards } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ApiBody } from '@nestjs/swagger';
import { commentCreateDTO } from './dtos/commentCreateDTO/commentCreateDTO';
import { UserGuard } from 'src/auth/user/user.guard';

@UseGuards(UserGuard)
@Controller('comments')
export class CommentsController {

    private _commentsService: CommentsService;

    constructor(commentsService: CommentsService) {
        this._commentsService = commentsService
    }

    @Post()
    async createNewComment(@Body() comment: commentCreateDTO, @Request() req: any) {
        return this._commentsService.createNewComment(comment, req.user)
    }

    @Delete(':id')
    async deleteComment(@Param('id') comment_id: string, @Request() req: any) {
        return this._commentsService.deleteComment(comment_id, req.user)
    }

}
