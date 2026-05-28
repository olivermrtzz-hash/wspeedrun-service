import { ApiProperty } from "@nestjs/swagger";


export class categoryCreateDTO{
    @ApiProperty()
    run_category_id: string;
    @ApiProperty()
    game_id: string;
    @ApiProperty()
    run_category_name: string;
}