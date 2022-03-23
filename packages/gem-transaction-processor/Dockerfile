FROM node:14 AS builder
WORKDIR /build
COPY . .
RUN yarn install && yarn build && ls -alsR dist

FROM node:14 AS runner
WORKDIR /app
ENV PORT=3000
EXPOSE ${PORT}
COPY --from=builder /build/dist/ .
COPY --from=builder /build/package.json .
COPY --from=builder /build/yarn.lock .
RUN NODE_ENV=production yarn install
CMD node main.js
