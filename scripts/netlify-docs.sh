yarn install
yarn diez compile -t docs

cd build/docs
yarn install
cd ../..

mkdir netlify

cd netlify
cp -r ../build/docs/node_modules/@diez/docs-template-app/dist/* .
cp ../build/docs/tree.json assets
cp ../build/docs/searchIndex.json assets
cd ..
