import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { RolesGuard } from 'src/auth/roles/roles.guard';
import { categoryCreateDTO } from './dtos/categoryCreateDTO';

@Controller('categories')
export class CategoriesController {
    private _categoriesService: CategoriesService;

    constructor(categoriesService: CategoriesService){
        this._categoriesService = categoriesService;
    }

    @Get(':id')
    getCategoryById(@Param('id') run_category_id: string){
        return this._categoriesService.getCategoriesById(run_category_id);
    }

    @UseGuards(RolesGuard)
    @Post('/admin')
    createCategory(@Body() category: categoryCreateDTO){
        return this._categoriesService.createCategory(category);
    }

    @UseGuards(RolesGuard)
    @Patch('/admin/:id')
    updateCategoryDetail(@Param('id') id: string, @Body() updatedDetail: Partial<categoryCreateDTO>){
        return this._categoriesService.updateCategoryDetail(id, updatedDetail);
    }

    @UseGuards(RolesGuard)
    @Delete('/admin/:id')
    deleteCategory(@Param('id') id: string){
        return this._categoriesService.deleteCategory(id);
    }
}
