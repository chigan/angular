import { Injectable } from '@angular/core';

@Injectable()
export class InMemoryDataService {

  createDb() {
    const heroes = [
      { id: 1, name: '白牛' },
      { id: 2, name: '火枪' },
      { id: 3, name: '神牛' },
      { id: 4, name: '冰女' },
      { id: 5, name: '混沌' },
      { id: 6, name: '蓝胖' },
      { id: 7, name: '隐刺' },
      { id: 8, name: '幻刺' },
      { id: 9, name: '火女' },
      { id: 10, name: '毒龙' }
    ];
    return {heroes};
  }

}
