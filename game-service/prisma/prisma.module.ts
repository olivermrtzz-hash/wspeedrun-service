import { Global, Module } from "@nestjs/common";
import { PrismaClient } from "@prisma/client/extension";
import prismaConfig from "prisma.config";
import { PrismaService } from "./prisma.service";

@Global()
@Module({
    providers: [PrismaService],
    exports: [PrismaService]
})
export class PrismaModule{}