import { Injectable} from '@nestjs/common';
import { categoryCreateDTO } from './dtos/categoryCreateDTO';

@Injectable()
export class CategoriesService {
    categoryList: Array <categoryCreateDTO> = [
        {
            run_category_id: "1",
            game_id: "1",
            run_category_name: "Any%",
        },
    ]

    getCategoriesById(id: string){
        const category = this.categoryList.find(t => t.run_category_id === id);
        return category ?? null;
    }

    createCategory(category: categoryCreateDTO){
        this.categoryList.push(category);

        return {
            message: 'You have created a new category'
        }
    }

    updateCategoryDetail(id: string, updatedDetail: Partial<categoryCreateDTO>){
        const category = this.categoryList.find(t => t.run_category_id === id);

        if (!category){
            return {
                message: 'The searched category does not exist'
            };
        }

        if (updatedDetail?.game_id){
            category.game_id = updatedDetail.game_id;
        }

        if (updatedDetail?.run_category_name){
            category.run_category_name = updatedDetail.run_category_name;
        }

        return {
            updatedDetail: category,
        }
    }

    deleteCategory(id: string){
        const category = this.categoryList.find(t => t.run_category_id === id);

        if (!category){
            return {
                message: 'The searched category does not exist'
            };
        }

        this.categoryList = this.categoryList.filter(t => t.run_category_id !== id);

        return {
            message: 'Category has been deleted successfully'
        };
    }
}
