import { Inject, Controller, Get} from '@midwayjs/core';
import { Context } from '@midwayjs/koa';
import {LebaiBoilService} from '../../service/lebai/lebai-boil.service';

@Controller('/action')
export class APIController {

  @Inject()
  ctx: Context;

  @Inject()
  lebaiBoilService: LebaiBoilService;

  @Get('/order_list')
  async orderList() {
    const list = await this.lebaiBoilService.getListService();
    return { success: true, message: 'OK', data: list };
  }

  @Get('/system_status')
  async getSystemStatus() {
    const data = await this.lebaiBoilService.getSystemStatus();
    return { ...data };
  }
}
