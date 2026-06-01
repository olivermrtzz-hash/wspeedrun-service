import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { RunsService } from './runs.service';
import { AdminGuard } from 'src/auth/admin/admin.guard';
import { runCreateDTO } from './dtos/runCreateDTO';

@UseGuards(AdminGuard)
@Controller('admin')
export class RunsController {
    private _runsService: RunsService;

    constructor(runsService: RunsService) {
        this._runsService = runsService
    }

    // Run
    @Get('runs/:id/category')
    async getRunsByCategory(@Param('id') id: string) {
        return await this._runsService.getRunsByCategory(id)
    }
    @Post('/runs')
    async createNewRunEntry(@Body() body: runCreateDTO, userId: string) {
        return await this._runsService.createNewRunEntry(body, userId)
    }
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
