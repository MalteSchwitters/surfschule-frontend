#!/bin/bash

npm install
npm run build

read -p "Upload to server? (y/n)? " answer
case ${answer:0:1} in
    y|Y )
        echo "Uploading to server"
    ;;
    * )
        exit
    ;;
esac

scp -r dist/ root@159.89.9.97:/usr/share/nginx/html/dist_temp/
echo "Creating backup of previous version"
ssh root@159.89.9.97 mv /usr/share/nginx/html/dist/ /usr/share/nginx/html/dist_backup/"$(date '+%s')"/
echo "Activating new version"
ssh root@159.89.9.97 mv /usr/share/nginx/html/dist_temp/ /usr/share/nginx/html/dist/
