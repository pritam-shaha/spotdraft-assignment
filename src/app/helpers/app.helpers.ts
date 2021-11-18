import {
  compose,
  either,
  isEmpty,
  isNil,
  not
} from 'ramda';

export const isNilOrEmpty = either(isNil, isEmpty);

export const isNotNullOrEmpty = compose(not, isNilOrEmpty);