import { Provide } from '@midwayjs/core';

@Provide()
export class LebaiBoilService {
  async getListService() {
     return [
       {
         order_id: 1,
         name: '面条',
         status: 0,
         soup_name: '',
         time_expected: 100,
         time_left: 80
       },
     ]
  }

  async getSystemStatus() {
    return {
      robot_status: 1,
      scheduler_status: 1,
      order_count: 20,
    }
  }
}
