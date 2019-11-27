import merge from 'lodash/merge';
import get from 'lodash/get';
import baseTheme from '../theme';

const getTheme = mode => {
  return merge({}, baseTheme, {
    colors: get(baseTheme.colors.modes, mode, baseTheme.colors),
  });
};

export default getTheme;
