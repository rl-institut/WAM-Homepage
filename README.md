# WAM-HP

## Translation

Translation is made using [static-i18n](https://github.com/claudetech/node-static-i18n).
Build translated files via:
```
static-i18n -l de -i de -i en -o . pages/ 
```
Note: Project order in JSON files is not retained - projects in generated HTML
files can have different order and must be edited manually, if needed.

## SCSS Compiler

Compile into CSS:
```
npm run build-css
```