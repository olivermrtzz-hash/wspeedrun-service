/* eslint-disable */
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber } from "class-validator";

export class runCreateDTO {
    @ApiProperty()
    @IsNotEmpty()
    run_category_id!: string;
    @ApiProperty()
    vod_url!: string;
    @ApiProperty()
    @IsNumber()
    run_duration!: bigint;

}