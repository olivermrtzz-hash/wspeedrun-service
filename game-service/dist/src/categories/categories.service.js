"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
let CategoriesService = class CategoriesService {
    categoryList = [
        {
            run_category_id: "1",
            game_id: "1",
            run_category_name: "Any%",
        },
    ];
    getCategoriesById(id) {
        const category = this.categoryList.find(t => t.run_category_id === id);
        return category ?? null;
    }
    createCategory(category) {
        this.categoryList.push(category);
        return {
            message: 'You have created a new category'
        };
    }
    updateCategoryDetail(id, updatedDetail) {
        const category = this.categoryList.find(t => t.run_category_id === id);
        if (!category) {
            return {
                message: 'The searched category does not exist'
            };
        }
        if (updatedDetail?.game_id) {
            category.game_id = updatedDetail.game_id;
        }
        if (updatedDetail?.run_category_name) {
            category.run_category_name = updatedDetail.run_category_name;
        }
        return {
            updatedDetail: category,
        };
    }
    deleteCategory(id) {
        const category = this.categoryList.find(t => t.run_category_id === id);
        if (!category) {
            return {
                message: 'The searched category does not exist'
            };
        }
        this.categoryList = this.categoryList.filter(t => t.run_category_id !== id);
        return {
            message: 'Category has been deleted successfully'
        };
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)()
], CategoriesService);
//# sourceMappingURL=categories.service.js.map