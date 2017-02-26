for x in a b; do (
    cd node_modules/$x;
    rm -rf build
    npm install
    node index.js
) done

node index.js
