ARG NODE_IMAGE=node:16.13.1-alpine

FROM $NODE_IMAGE AS base
RUN apk --no-cache add dumb-init
RUN mkdir -p /home/node/app && chown node:node /home/node/app
WORKDIR /home/node/app
USER node
RUN mkdir tmp

FROM base AS dependencies
COPY --chown=node:node ./package*.json ./
RUN npm ci
COPY --chown=node:node . .

FROM dependencies AS build
RUN node ace build --production

FROM base AS production
ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV NODE_ENV=production
ENV PORT=3333
ENV APP_KEY=sd_yuezPCvp6w7WvaFmPuaXzev8K0UEb
ENV DRIVE_DISK=local
ENV DB_CONNECTION=pg
ENV PG_HOST=localhost
ENV PG_PORT=5432
ENV PG_USER=postgres
ENV PG_PASSWORD=pumapuma
ENV PG_DB_NAME=wcDB
COPY --chown=node:node ./package*.json ./
RUN npm ci --production
COPY --chown=node:node --from=build /home/node/app/build .
EXPOSE 3333
CMD [ "dumb-init", "node", "server.js" ]

# # Set environment variables

