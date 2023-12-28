#!/bin/bash

set -e

. .env/bin/activate
yes "yes" | firstcond/manage.py distill-local ./out/
mv ./out/index.html ./
mv ./out/ru/index.html ./ru/
