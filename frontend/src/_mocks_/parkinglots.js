import faker from 'faker';
import sample from 'lodash/sample';
// utils
import { mockImgParkinglot } from '../utils/mockImages';

const PARKINGLOT_INFO = [
  { using: true, name: '주차장1', code: 'AA001', address: 'Long Beach, California' },
  { using: true, name: 'Parking site No.113', code: 'AB010', address: 'Chicago, Illinois' },
  { using: true, name: 'Pretty Parkinglot', code: 'AA025', address: 'Honolulu, Hawaii' },
  { using: false, name: 'Park☆', code: 'CA009', address: 'Sacramento, California' },
  { using: true, name: 'Fav Spot', code: 'AB100', address: 'Iowa City, Iowa' },
  { using: true, name: 'MY주차장', code: 'CB001', address: 'San Jose, California' },
  { using: false, name: '안쓰는주차장', code: 'CB002', address: 'Detroit, Michigan' },
  { using: true, name: 'ParkCar', code: 'CB003', address: 'Springfield, Illinois' },
  { using: false, name: 'Park No.9', code: 'AA030', address: 'Columbus, Nebraska' }
];

const PARKINGLOT_NAME = [
  '주차장1',
  'Parking site No.113',
  'Pretty Parkinglot',
  'Park☆',
  'Fav Spot',
  'MY주차장',
  '안쓰는주차장',
  'ParkCar',
  'Park No.9'
];

const PARKINGLOT_ADDRESS = [
  'Long Beach, California',
  'Chicago, Illinois',
  'Honolulu, Hawaii',
  'Sacramento, California',
  'Iowa City, Iowa',
  'San Jose, California',
  'Detroit, Michigan',
  'Springfield, Illinois',
  'Columbus, Nebraska'
];

const PARKINGLOT_CODES = [
  'AA001',
  'AB010',
  'AA025',
  'CA009',
  'AB100',
  'CB001',
  'CB002',
  'CB003',
  'AA030'
];

// const PARKINGLOT_COLOR = [
//   '#00AB55',
//   '#000000',
//   '#FFFFFF',
//   '#FFC0CB',
//   '#FF4842',
//   '#1890FF',
//   '#94D82D',
//   '#FFC107'
// ];

const parkinglots = [...Array(9)].map((_, index) => {
  const setIndex = index + 1;

  return {
    id: faker.datatype.uuid(),
    cover: mockImgParkinglot(setIndex),
    name: PARKINGLOT_INFO[index].name,
    address: PARKINGLOT_INFO[index].address,
    code: PARKINGLOT_INFO[index].code,
    using: PARKINGLOT_INFO[index].using,
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
    // colors:
    //   (setIndex === 1 && PARKINGLOT_COLOR.slice(0, 1)) ||
    //   (setIndex === 2 && PARKINGLOT_COLOR.slice(0, 2)) ||
    //   (setIndex === 3 && PARKINGLOT_COLOR.slice(0, 3)) ||
    //   (setIndex === 4 && PARKINGLOT_COLOR.slice(0, 4)) ||
    //   (setIndex === 5 && PARKINGLOT_COLOR.slice(0, 5)) ||
    //   (setIndex === 6 && PARKINGLOT_COLOR.slice(0, 6)) ||
    //   PARKINGLOT_COLOR,
    status: sample(['sale', 'new', '', ''])
  };
});

export default parkinglots;
