#!/bin/bash

if [ "$1" == "all" ]; then
	for DIR in `find src -mindepth 1 -maxdepth 1 -type d`; do
		if [ -d "$DIR" ]; then
			"$0" $(basename "$DIR");
		fi
	done
	exit 0;
fi

if [ ! -d "gen" ]; then
	mkdir "gen";
fi

php src/index.php $1 > src/index.html;

cat generate.script | sed "s|PATHTOHTML|$(echo `pwd`/src/index.html)|" | osascript;

mv ~/Desktop/the-output-from-fia-med-kort.pdf gen/$1.pdf;
rm src/index.html;

exit 0;
