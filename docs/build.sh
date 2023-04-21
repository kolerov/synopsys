#!/bin/bash -ex

if [[ -d .venv ]] ; then
    VENV=".venv"
elif [[ -d ../.venv ]] ; then
    VENV="../.venv"
else
    echo "Error: .venv directory does not exist!"
    exit 1
fi

source $VENV/bin/activate
make html
