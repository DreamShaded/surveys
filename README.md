# Приложение для создания опросов и анализа результатов

Автор идеи - [chatGPT](https://freegpt.one/). База под разработку [содрана отсюда](https://learndjango.com/tutorials/django-docker-and-postgresql-tutorial).

## Бэкенд:

Django v4.1.7, PostgreSQL 15.2


### Разворачивание:
1. Установить [docker engine](https://docs.docker.com/engine/install/)
   1. [Добавить группу и прочее](https://docs.docker.com/engine/install/linux-postinstall/)
   2. Убедиться, что он установлен корректно, выполнив в терминале ```docker --version```
   3. Установить плагин [Docker Compose](https://docs.docker.com/compose/install/linux/)
   4. Можно установить [новый билдер](https://docs.docker.com/build/install-buildx/), но я забил, хотя рекомендуется.
2. Установить [python свежей версии](https://www.python.org/downloads/).
   1. Обновить pip: ```pip install --upgrade pip```
3. В директории backend создать директорию postgres
4. Все .env.example скопировать в .env просто, без .example
5. В корневой директории (где находится данный ридми) собрать всё командой ```docker compose up```. В консоли заодно будут крутиться логи, видно ошибки и тп.

Теперь можно менять всё в папке backend, сразу цепляется и обновляется, доступно всё по пути ```http://localhost:8000```



## Фронтенд:
React 18.2, NodeJS 18

TODO: завести фронтенд
