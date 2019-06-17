const {execSync} = require('child_process');

compileMainTheme();

function compileMainTheme() {
    const pathFrom = `../angular-components-library/src`;
    const pathTo = `dist/helpers`;

    execSync(`lessc ${pathFrom}/global-vars.less ${pathTo}/main-theme.css`);
}
