# Copy from https://zeit.co/blog/react-riot-nextjs-now#deploying-server-rendered-next.js-applications-with-now
# Use a Node.js image and assign it as our build
FROM mhart/alpine-node:12 AS builder

# Set the working directory, copy dependency management files to the working directory,
# and install the dependencies
WORKDIR /usr/src
COPY package.json /usr/src
COPY yarn.lock /usr/src
RUN yarn

# Copy all files to the working directly, build the application
# and purge the development dependencies
COPY . .
RUN yarn build

# if NODE_ENV is production yarn install is --production
ENV NODE_ENV production
RUN rm -rf node_modules
RUN yarn

FROM mhart/alpine-node:base AS production

WORKDIR /usr/src
ENV NODE_ENV production

# Copy files from the base image over to our new image's working directory
COPY --from=builder /usr/src/package.json package.json
COPY --from=builder /usr/src/static static
COPY --from=builder /usr/src/.next .next
COPY --from=builder /usr/src/node_modules node_modules

RUN apk add --no-cache curl

# Start the server for Next.js using Node.js
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]

# docker build -t ogp-local-checker:prod .
# docker run -it -p 3000:80 --rm ogp-local-checker:prod