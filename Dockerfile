# Copy from https://zeit.co/blog/react-riot-nextjs-now#deploying-server-rendered-next.js-applications-with-now
# Use a Node.js image and assign it as our build
FROM node:12-alpine AS build

# Set the working directory, copy dependency management files to the working directory,
# and install the dependencies
WORKDIR /usr/src
COPY package.json yarn.lock ./
RUN yarn

# Copy all files to the working directly, build the application
# and purge the development dependencies
COPY . .
RUN yarn build

# Create a new image using a minimal Node.js image
# with no extra tools packaged in, such as Yarn or npm for the smallest final size
FROM alpine:3.5 AS release

# install node
RUN apk add –no-cache nodejs && \
  npm uninstall -g npm

# Set the working directory for the new image and
# set the \`NODE_ENV\` environment variable value to \`production\`
# along with setting the path for node_modules to be accessible
WORKDIR /usr/src
ENV NODE_ENV="production"
ENV PATH="./node_modules/.bin:\$PATH"

# Copy files from the base image over to our new image's working directory
COPY --from=build /usr/src package.json
COPY --from=build /usr/src/.next .next
COPY --from=build /usr/src/static static
COPY --from=build /usr/src next.config.js
COPY --from=build /usr/src next-env.d.ts

# Start the server for Next.js using Node.js
CMD ["next", "start"]

# docker build -t ogp-local-checker:prod .
# docker run -it -p 3000:80 --rm ogp-local-checker:prod