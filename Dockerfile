
FROM nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY dist/prod /usr/share/nginx/html
