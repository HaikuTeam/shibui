# yarn install
# yarn diez compile -t docs

# pushd build/docs
#   yarn install
# popd

# mkdir netlify

pushd netlify
  cp -r ../build/docs/node_modules/@diez/docs-template-app/dist/* .
  cp ../build/docs/tree.json assets
  cp ../build/docs/searchIndex.json assets
popd
