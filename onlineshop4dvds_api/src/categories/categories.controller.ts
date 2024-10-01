import { Body, Controller, Delete, Get, HttpCode, NotFoundException, Param, Post, Put, Query } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoryCreateDto } from './dtos/category-create.dto';
import { Category } from './category.entity';
import { CategoryUpdateDto } from './dtos/category-update.dto';
import { CategoryGetDto } from './dtos/category-get.dto';
import { GenresRequestParams } from 'src/utils/request-params';

@Controller('categories')
export class CategoriesController {

    public constructor(private categoriesService: CategoriesService) {}

    @Get()
    public async getRange(@Query() genresRequestParams?: GenresRequestParams) {
        const categories = await this.categoriesService.findRange({requestParams: genresRequestParams, ids: undefined});
        const categoriesToReturn = categories.map(c => {
            const categoryToReturn: CategoryGetDto = {
                id: c.id,
                name: c.name,
                type: c.type,
            };
            return categoryToReturn;
        });

        return categoriesToReturn;
    }

    @Get(":id")
    public async getById(@Param("id") id: number) {
        const category = await this.categoriesService.findById(id);
        if (!category) throw new NotFoundException();

        const categoryToReturn: CategoryGetDto = {
            id: category.id,
            name: category.name,
            type: category.type,
        };
        return categoryToReturn;
    }

    @Post()
    public async create(@Body() categoryCreateDto: CategoryCreateDto) {
        const categoryToCreate = new Category();
        categoryToCreate.name = categoryCreateDto.name;
        categoryToCreate.type = categoryCreateDto.type;

        return await this.categoriesService.create(categoryToCreate);
    }

    @HttpCode(204)
    @Put(":id")
    public async update(@Param("id") id: number, @Body() categoryUpdateDto: CategoryUpdateDto) {
        const category = await this.categoriesService.findById(id);
        if (!category) throw new NotFoundException();

        return await this.categoriesService.update(id, categoryUpdateDto);
    }

    @HttpCode(204)
    @Delete(":id")
    public async delete(@Param("id") id: number) {
        const cateogry = await this.categoriesService.findById(id);
        if (!cateogry) throw new NotFoundException();

        return await this.categoriesService.delete(id);
    }
}
