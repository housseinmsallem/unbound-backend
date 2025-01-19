import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member } from './entities/member.entity';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private membersRepository: Repository<Member>,
  ) {}
  create(createMemberDto: CreateMemberDto) {
    return this.membersRepository.create(createMemberDto);
  }

  findAll() {
    return this.membersRepository.find();
  }

  findOne(username: string) {
    return this.membersRepository.findOneBy({ username });
  }

  update(username: string, updateMemberDto: UpdateMemberDto) {
    return this.membersRepository.update({ username }, updateMemberDto);
  }

  delete(username: string) {
    return this.membersRepository.delete({ username });
  }
}
