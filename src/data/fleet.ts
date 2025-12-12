import { Aircraft } from '../types';

export const fleet: Aircraft[] = [
  {
    id: 'b747-8',
    name: 'Boeing 747-8',
    image: 'https://pixabay.com/get/g6b24b6d74b9dd63011fa96e20467889c68d119301781315eeffd8b1371561098d15c847d692d6d382a5576f5a9573358beb2afcb3441680bf0743712c98cd265_1280.jpg',
    capacity: 364,
    rows: 40,
    cols: 10, // 3-4-3
    aisles: [3, 7]
  },
  {
    id: 'a320',
    name: 'Airbus A320',
    image: 'https://pixabay.com/get/g55bbe7d93f799a43aa11669fbb0f7e67010a03875021909fa1b98cc23dd42095e9305544294257cd755cb3ba48a7971ccfe9391bd4a3ca85abc4bba39f15becb_1280.jpg',
    capacity: 180,
    rows: 30,
    cols: 6, // 3-3
    aisles: [3]
  },
  {
    id: 'a380',
    name: 'Airbus A380',
    image: 'https://pixabay.com/get/gd3520fa34e384c6d7aa3d69465449366d586f7e237ddb802854d978eac4289939d587b7dffeb1b401588b57ea2a3d29c02edebf35f941934f40475a03467f70a_1280.jpg',
    capacity: 500,
    rows: 50,
    cols: 10, // 3-4-3
    aisles: [3, 7]
  },
  {
    id: 'b787',
    name: 'Boeing 787',
    image: 'https://pixabay.com/get/g066f742f0c6c5c5a27381825f1b7ed44930cac8e0f563c96ef351adf9a2c7d7c2a82f1f05864b93c22fe8428f1f23ae97ce82c806fc28ff29d0631bfea327fc6_1280.jpg',
    capacity: 250,
    rows: 30,
    cols: 9, // 3-3-3
    aisles: [3, 6]
  }
];
