module.exports = {
  extends: 'airbnb-typescript-prettier',
  parserOptions: {
    project: './tsconfig.json',
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      typescript: {}, // this loads <rootdir>/tsconfig.json to eslint
    },
  },
};
