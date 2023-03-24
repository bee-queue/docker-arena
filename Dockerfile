FROM node:lts-alpine

# - Upgrade alpine packages to avoid possible os vulnerabilities
# - Tini for Handling Kernel Signals https://github.com/krallin/tini
#   https://github.com/nodejs/docker-node/blob/master/docs/BestPractices.md#handling-kernel-signals
RUN apk --no-cache upgrade && apk add --no-cache tini redis

USER node

WORKDIR /home/node/arena

COPY --chown=node:node ./package.json .
COPY --chown=node:node ./package-lock.json .
COPY --chown=node:node ./index.js .

RUN npm ci --only=production

EXPOSE 4567

ENTRYPOINT ["npm"]
CMD ["start"]
