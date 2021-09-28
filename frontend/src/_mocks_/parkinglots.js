import faker from 'faker';
import sample from 'lodash/sample';
// utils
import { mockImgParkinglot } from '../utils/mockImages';

const PARKINGLOT_NAME = [
  'Long Beach, California',
  'Denver, Colorado',
  'Honolulu, Hawaii',
  'Moscow, Idaho',
  'Iowa City, Iowa',
  'Beverly, Massachusetts',
  'Detroit, Michigan',
  'Philadelphia, Mississippi',
  'Columbus, Nebraska'
];

const PARKINGLOT_COLOR = [
  '#00AB55',
  '#000000',
  '#FFFFFF',
  '#FFC0CB',
  '#FF4842',
  '#1890FF',
  '#94D82D',
  '#FFC107'
];

const parkinglots = [...Array(9)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgParkinglot(setIndex),
    name: PARKINGLOT_NAME[index],
    price: faker.datatype.number({
      min: 4,
      max: 99,
      precision: 0.01
    }),
    priceSale:
      setIndex % 3
        ? null
        : faker.datatype.number({
            min: 19,
            max: 29,
            precision: 0.01
          }),
    colors:
      (setIndex === 1 && PARKINGLOT_COLOR.slice(0, 1)) ||
      (setIndex === 2 && PARKINGLOT_COLOR.slice(0, 2)) ||
      (setIndex === 3 && PARKINGLOT_COLOR.slice(0, 3)) ||
      (setIndex === 4 && PARKINGLOT_COLOR.slice(0, 4)) ||
      (setIndex === 5 && PARKINGLOT_COLOR.slice(0, 5)) ||
      (setIndex === 6 && PARKINGLOT_COLOR.slice(0, 6)) ||
      PARKINGLOT_COLOR,
    status: sample(['sale', 'new', '', ''])
  };
});

export default parkinglots;
