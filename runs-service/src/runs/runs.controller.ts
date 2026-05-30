import { Controller, Get, Param, Post } from '@nestjs/common';
import { RunsService } from './runs.service';

@Controller('runs')
export class RunsController {
    private _runsService: RunsService;

    constructor(private runsService: RunsService) {
        this._runsService = runsService
    }

    @Get(':status')
    async getRunsByStatus(@Param('status') status: string) {
        return await this._runsService.getRunsByStatus(status);
    }

    @Post(':id/accept')
    async acceptRunEntry(@Param('id') id: string) {
        return await this._runsService.updateRunStatus(id, 'ACCEPTED');
    }

    @Post(':id/reject')
    async rejectRunEntry(@Param('id') id: string) {
        return await this._runsService.updateRunStatus(id, 'REJECTED');
    }
}
