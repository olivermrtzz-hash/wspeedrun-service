/* eslint-disable */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class commentCreateDTO {
    // exclamation mark might be replaced with better validation later
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    run_id!: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    user_id!: string;
    
    @ApiProperty()
    comment!: string;
}