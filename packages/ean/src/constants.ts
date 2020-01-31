export const EMPTY_BIN = '00000000';
export const SIDE_BIN = '101';
export const MIDDLE_BIN = '01010';

export const BINARIES = {
  L: [
    '0001101', '0011001', '0010011', '0111101', '0100011',
    '0110001', '0101111', '0111011', '0110111', '0001011',
  ],
  G: [
    '0100111', '0110011', '0011011', '0100001', '0011101',
    '0111001', '0000101', '0010001', '0001001', '0010111',
  ],
  R: [
    '1110010', '1100110', '1101100', '1000010', '1011100',
    '1001110', '1010000', '1000100', '1001000', '1110100',
  ],
  O: [
    '0001101', '0011001', '0010011', '0111101', '0100011',
    '0110001', '0101111', '0111011', '0110111', '0001011',
  ],
  E: [
    '0100111', '0110011', '0011011', '0100001', '0011101',
    '0111001', '0000101', '0010001', '0001001', '0010111',
  ]
};

export const EAN2_STRUCTURE = ['LL', 'LG', 'GL', 'GG'];

export const EAN5_STRUCTURE = [
  'GGLLL', 'GLGLL', 'GLLGL', 'GLLLG', 'LGGLL',
  'LLGGL', 'LLLGG', 'LGLGL', 'LGLLG', 'LLGLG',
];

export const EAN13_STRUCTURE = [
  'LLLLLL', 'LLGLGG', 'LLGGLG', 'LLGGGL', 'LGLLGG',
  'LGGLLG', 'LGGGLL', 'LGLGLG', 'LGLGGL', 'LGGLGL',
];
