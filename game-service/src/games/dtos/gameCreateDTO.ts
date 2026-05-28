/*eslint-disable*/
import { ApiProperty } from "@nestjs/swagger";

export class gameCreateDTO {
    @ApiProperty()
    game_id: string;
    @ApiProperty()
    game_name: string;
    @ApiProperty()
    description: string;
}