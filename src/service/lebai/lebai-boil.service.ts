import {Provide} from '@midwayjs/core';
import {join} from "node:path"
import {readFileSync} from "node:fs"

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

  async getDishConfig() {
    // 获取当前文件夹下的config.json文件
    const filePath = join(__dirname, 'config.json');
    const dishConfig = readFileSync(filePath, 'utf-8')
    return JSON.parse(dishConfig)
  }
}
