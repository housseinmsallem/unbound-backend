import { Injectable } from '@nestjs/common';
import { CreateTrainDto } from './dto/create-train.dto';
import { UpdateTrainDto } from './dto/update-train.dto';
import { Repository } from 'typeorm';
import { Train } from './entities/train.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TrainService {
  constructor(
    @InjectRepository(Train)
    private trainRepository: Repository<Train>,
  ) {}
  create(createTrainDto: CreateTrainDto) {
    return 'This action adds a new train';
  }

  findAll() {
    return `This action returns all train`;
  }

  findOne(id: number) {
    return `This action returns a #${id} train`;
  }

  update(id: number, updateTrainDto: UpdateTrainDto) {
    return `This action updates a #${id} train`;
  }

  remove(id: number) {
    return `This action removes a #${id} train`;
  }
  bulkCreate(trains: Train[]) {
    return this.trainRepository.save(trains);
  }
}
