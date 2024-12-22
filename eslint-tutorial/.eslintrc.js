module.exports = {
  root:true, // rootディレクトリまで遡って設定ファイルをマージする仕様があるため、trueにしてここで止める.
  env: {
    browser:true,
    es2021:true,
  },
  parserOptions:{
    ecmaVersion:"latest",
    sourceType:"module",
  },
  extends:["airbnb-base"],
  rules:{
    "import/prefer-default-export":"off",
    "quotes":["error","double"],
  },
};