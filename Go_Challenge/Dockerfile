FROM golang:alpine as Builder

WORKDIR /www
COPY . .

ENV CGO_ENABLED=0
ENV GOOS=linux

RUN go mod init app && \
    go build  -ldflags '-w -s' -a -installsuffix cgo -o app && \
    apk add upx && \
    upx ./app

FROM scratch

COPY --from=Builder /www/app /app

CMD [ "./app" ]