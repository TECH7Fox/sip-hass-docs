---
tags:
    - Add-on
---

# Running locally with Docker

The repository contains a `docker-compose.yml` file that can be used to locally build and run a standalone version of the add-on.

- Copy the example `json` configuration file and set your own values:
  ```bash
   cp asterisk/config.json.example asterisk/config.json
  ```
- Build a Docker image:
  ```bash
  docker-compose build asterisk
  ```
- Run the built image:
  ```bash
  docker-compose up asterisk
  ```
- If you want to easily edit and test the scripts without having to rebuild the whole image, you can mount the local files from the project directory in the container. 
See the `volumes:` section for examples.
