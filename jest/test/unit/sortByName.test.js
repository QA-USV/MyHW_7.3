/* eslint-disable linebreak-style */
/* eslint-disable no-undef */

const sorting = require('../../app');

describe('Books names test suit_1', () => {
  it('Books names should be sorted in ascending order', () => {
    expect(
      sorting.sortByName([
        'Гарри Поттер',
        'Властелин Колец',
        'Волшебник изумрудного города',
      ]),
    ).toEqual([
      'Властелин Колец',
      'Волшебник изумрудного города',
      'Гарри Поттер',
    ]);
  });
});

describe('Books names test suit_2', () => {
  it('Books names should be sorted in ascending order', () => {
    expect(
      sorting.sortByName([
        'Гарри Поттер',
        'Властелин Колец',
        'Властелин Колец',
      ]),
    ).toEqual([
      'Властелин Колец',
      'Властелин Колец',
      'Гарри Поттер',
    ]);
  });
});
