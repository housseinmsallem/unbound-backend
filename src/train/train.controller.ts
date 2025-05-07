import { unlink } from 'fs/promises';
import { createReadStream } from 'fs';

import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import * as XLSX from 'xlsx';
import * as fs from 'fs';
import { TrainService } from './train.service';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';

@Controller('train')
export class TrainController {
  constructor(private readonly trainService: TrainService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  async uploadTrainSchedule(@UploadedFile() file: Express.Multer.File) {
    console.log('Received file:', file);

    if (!file) {
      throw new Error('File is missing');
    }

    const trains = [];

    try {
      // Read the Excel file from the buffer
      const workbook = XLSX.read(file.buffer, { type: 'buffer' });

      // Access the first sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert the sheet data to JSON
      const data = XLSX.utils.sheet_to_json(sheet, { defval: '' }); // defval: '' ensures no undefined values

      // Process each row and map it to a train object
      for (const row of data) {
        const train = {
          trainName: row['Train'] || 'Unknown',
          tunis: row['Tunis'] || '',
          saiidaManoubia: row['Saiida Manoubia'] || '',
          mellassine: row['Mellassine'] || '',
          erraoudha: row['Erraoudha'] || '',
          leBardo: row['Le Bardo'] || '',
          elBortal: row['El Bortal'] || '',
          manouba: row['Manouba'] || '',
          lesOrangers: row['Les Orangers'] || '',
          gobaa: row['Gobaa'] || '',
          gobaaVille: row['Gobaa Ville'] || '',
          direction: row['Direction'] || '',
        };

        trains.push(train);
      }

      // Save the train data to the database
      await this.trainService.bulkCreate(trains);

      return {
        message: 'Train schedule imported successfully',
        trains,
      };
    } catch (err) {
      throw new Error('Error processing the file: ' + err.message);
    }
  }

  @Post()
  create(@Body() createTrainDto: CreateTrainDto) {
    return this.trainService.create(createTrainDto);
  }

  @Get()
  findAll() {
    return this.trainService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTrainDto: UpdateTrainDto) {
    return this.trainService.update(+id, updateTrainDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainService.remove(+id);
  }
}
