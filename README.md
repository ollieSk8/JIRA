# JIRA

## 项目初始化设置

```sh
# 格式化工具prettier
yarn add --dev --exact prettier
# prettier配置文件
echo {}> .prettierrc.json
# prettier忽略文件
touch .prettierignore
# pre-commit Hook 在代码提交之前自动格式化
npx mrm lint-staged
#
yarn add eslint-config-prettier -D
# commitlint 规范提交
yarn add @commitlint/config-conventional @commitlint/cli -D
npx husky add .husky/commit-msg "yarn commitlint --edit $1"
#数据Mock
yarn add json-server -D
```
