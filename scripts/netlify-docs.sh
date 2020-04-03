yarn install
yarn diez compile -t docs

pushd build/diez-haiku-shibui-docs
yarn build
cp -r dist ../../dist
popd
