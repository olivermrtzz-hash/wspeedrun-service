/* eslint-disable */
import { ApiProperty } from "@nestjs/swagger";

export class commentCreateDTO {
    // exclamation mark might be replaced with better validation later
    @ApiProperty()
    run_id!: string;

    @ApiProperty()
    comment!: string;

    @ApiProperty()
    user_id: any;
}