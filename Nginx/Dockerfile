
FROM nginx:1.15.0-alpine

RUN nginx

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

RUN mkdir /www/app -p && \
    touch /www/app/index.html

COPY index.html /usr/share/nginx/html

EXPOSE 80
