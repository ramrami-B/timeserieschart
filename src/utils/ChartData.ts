import { DataType } from '@/@types/DataType';

const dataObj = require('../../public/data/data.json');
const dataList: DataType[] = Object.values(dataObj);

export class ChartData {
  get() {
    return dataList
  }

  getLength() {
    return dataList.length;
  }

  getBarMaxValue() {
    let maxValue = -1;

    dataList.forEach((data) => {
      if (maxValue < data.value_bar) {
        maxValue = data.value_bar;
      }
    });

    return maxValue;
  }

  getAreaMaxValue() {
    let maxValue = -1;

    dataList.forEach((data) => {
      if (maxValue < data.value_area) {
        maxValue = data.value_area;
      }
    });

    return maxValue;
  }
}

export const chartData = new ChartData();