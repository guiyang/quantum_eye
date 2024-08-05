FROM mcr.microsoft.com/vscode/devcontainers/python:dev-3.11

ENV PYTHONUNBUFFERED 1

RUN apt-get update && export DEBIAN_FRONTEND=noninteractive \
    && apt-get -y install --no-install-recommends mariadb-client

# 安装 Python 包
# RUN pip install --upgrade pip \
#     && pip install autopep8 black isort flake8 mypy bandit poetry
RUN pip install --upgrade pip \
    && pip install autopep8 black isort flake8

# 复制并安装 requirements（如果存在）
COPY requirements.txt /tmp/pip-tmp/requirements.txt
RUN pip --disable-pip-version-check --no-cache-dir install -r /tmp/pip-tmp/requirements.txt \
    && rm -rf /tmp/pip-tmp

WORKDIR /app

COPY . .

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]