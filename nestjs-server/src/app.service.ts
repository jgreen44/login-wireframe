import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string[] {
    var list = ["item1", "item2", "item3"];
    return list;
  }
}
