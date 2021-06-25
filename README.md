# docker-arena

The official docker application for bee-queue arena.

You can `docker pull` Arena from [Docker Hub](https://hub.docker.com/r/mixmaxhq/arena).

To build the image simply run:

```shell
$ docker build -t <name-image> .
```

To run a container, execute the following command. Note that we need to settle the location of `index.json` in this container via volume mounting:

```shell
$ docker run -p 4567:4567 -v </local/route/to/index.json>:/opt/arena/index.json <name-image>
```

See [the docs][usage] for `index.json`.

[usage]: https://github.com/bee-queue/arena/#usage
