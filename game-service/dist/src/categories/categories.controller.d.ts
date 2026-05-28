import { CategoriesService } from './categories.service';
import { categoryCreateDTO } from './dtos/categoryCreateDTO';
export declare class CategoriesController {
    private _categoriesService;
    constructor(categoriesService: CategoriesService);
    getCategoryById(run_category_id: string): categoryCreateDTO | null;
    createCategory(category: categoryCreateDTO): {
        message: string;
    };
    updateCategoryDetail(id: string, updatedDetail: Partial<categoryCreateDTO>): {
        message: string;
        updatedDetail?: undefined;
    } | {
        updatedDetail: categoryCreateDTO;
        message?: undefined;
    };
    deleteCategory(id: string): {
        message: string;
    };
}
