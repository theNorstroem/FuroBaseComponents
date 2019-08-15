#!/usr/bin/env bash
if [ -z "$1" ]
then
PACKAGEBUNDLENAME="default"
else
PACKAGEBUNDLENAME=$1
fi


DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
cd $DIR
cd ..

echo "clean proto dir"
rm -rf build/*

./_scripts/prepare.sh $PACKAGEBUNDLENAME
./_scripts/generateSingleFiles.sh
./_scripts/generateBundledFiles.sh
./_scripts/generateClientEnviroment.js
./_scripts/genswagger.sh

