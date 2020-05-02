FROM python:3.7.7-alpine3.11

RUN apk add --no-cache \
    build-base 

WORKDIR /app

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY src src

WORKDIR /app/src

ENV PYTHONUNBUFFERED 1
ENV FLASK_RUN_HOST 0.0.0.0
ENV FLASK_ENV development
ENV FLASK_APP api.py

EXPOSE 5000

CMD ["flask", "run", "--reload"]