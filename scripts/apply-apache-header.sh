#!/bin/bash

# From https://stackoverflow.com/questions/151677/tool-for-adding-license-headers-to-source-files

for i in `find . -name '*.ts'`
do
  if ! grep -q Copyright $i
  then
    cat copyright.txt $i >$i.new && mv $i.new $i
  fi
done