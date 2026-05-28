import { categoryCreateDTO } from './dtos/categoryCreateDTO';
export declare class CategoriesService {
    categoryList: Array<categoryCreateDTO>;
    getCategoriesById(id: string): categoryCreateDTO | null;
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
