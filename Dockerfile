FROM node:12.18.3-stretch as build-state
WORKDIR /app
COPY . .
RUN npm install \
    && npm run build


FROM node:12.18.3-alpine as production-state
WORKDIR /app
COPY --from=build-state /app/.next ./.next
COPY --from=build-state /app/node_modules ./node_modules
COPY --from=build-state /app/public ./public
COPY --from=build-state /app/static ./static

RUN pwd \
    && ls -la

ENV NODE_ENV="production"
EXPOSE 3000
CMD [ "./node_modules/.bin/next", "start" ]
