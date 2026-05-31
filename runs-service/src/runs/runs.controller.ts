import { Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RunsService } from './runs.service';
import { AdminGuard } from 'src/auth/admin/admin.guard';

@UseGuards(AdminGuard)
@Controller('admin')
export class RunsController {
    private _runsService: RunsService;

    constructor(runsService: RunsService) {
        this._runsService = runsService
    }

    // Run
    
    // Run Management
    @Get('runs/:status')
    async getRunsByStatus(@Param('status') status: string) {
        return await this._runsService.getRunsByStatus(status);
    }

    @Post('runs/:id/accept')
    async acceptRunEntry(@Param('id') id: string) {
        return await this._runsService.updateRunStatus(id, 'ACCEPTED');
    }

    @Post('runs/:id/reject')
    async rejectRunEntry(@Param('id') id: string) {
        return await this._runsService.updateRunStatus(id, 'REJECTED');
    }
}
