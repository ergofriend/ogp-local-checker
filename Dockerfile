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
RUN yarn build --production

# Create a new image using a minimal Node.js image
# with no extra tools packaged in, such as Yarn or npm for the smallest final size
FROM mhart/alpine-node:12 AS release

# Set the working directory for the new image and
# set the \`NODE_ENV\` environment variable value to \`production\`
# along with setting the path for node_modules to be accessible
WORKDIR /usr/src

# if NODE_ENV is production yarn install is --production
ENV NODE_ENV production
COPY package.json /usr/src
COPY yarn.lock /usr/src
RUN yarn

# Copy files from the base image over to our new image's working directory
COPY --from=builder /usr/src/.next .next
COPY --from=builder /usr/src/static static
COPY --from=builder /usr/src next.config.js
COPY --from=builder /usr/src next-env.d.ts

FROM mhart/alpine-node:base AS production

WORKDIR /usr/src
ENV NODE_ENV production

COPY --from=release /usr/src package.json
COPY --from=release /usr/src yarn.lock
COPY --from=release /usr/src/.next .next
COPY --from=release /usr/src/static static
COPY --from=release /usr/src next.config.js
COPY --from=release /usr/src next-env.d.ts
COPY --from=release /usr/src/node_modules node_modules

# Start the server for Next.js using Node.js
EXPOSE 3000
CMD ["node_modules/.bin/next", "start"]

# docker build -t ogp-local-checker:prod .
# docker run -it -p 3000:80 --rm ogp-local-checker:prod