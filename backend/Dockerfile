# Pull base image
FROM python:3.12.0rc1-slim-bullseye

# Set environment variables
# disables an automatic check for pip updates each time
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
# means Python will not try to write .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
# ensures our console output is not buffered by Docker
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /sources

# Install dependencies
COPY ./requirements.txt .
RUN pip install -r requirements.txt

# Copy project
COPY . .
