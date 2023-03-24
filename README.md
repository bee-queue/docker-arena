Docker image for [bee-queue arena]. Allow you to monitor your bull queue without any coding!

### Quick start with Docker
```
docker run -p 4567:4567 -v index.json:/home/node/arena/index.json venatum/arena
```
will run bull-board interface on `localhost:3000` and connect to your redis instance on `localhost:6379` without password.

To configure redis see "Environment variables" section.

### Quick start with docker-compose

```yaml
version: "3"

services:
    arena:
        container_name: arena
        image: venatum/arena
        restart: unless-stopped
        volumes:
          - ./index.json:/home/node/arena/index.json:ro
        ports:
          - "4567:5467"
```
will run arena interface on `localhost:4567` and connect to your redis instance on `localhost:6379` without password.

### Configuration

See [the docs][usage] for `index.json`.

[bee-queue arena]: https://github.com/bee-queue/arena
[usage]: https://github.com/bee-queue/arena/#usage
