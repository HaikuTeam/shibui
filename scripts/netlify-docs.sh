yarn install
yarn diez compile -t docs

cd build/diez-haiku-shibui-docs
yarn build
yarn build
cp -r dist/ ../../dist/
