FROM graphprotocol/graph-node:v0.25.0

# FROM node:14-alpine
# RUN apt-get update
# RUN apk add --no-cache --update \
#     git \
#     python3 \
#     && rm -rf /var/cache/apk/*

RUN apt-get update
RUN apt-get install -y curl git

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get install -y nodejs

# COPY --from=graph-node /usr/local/bin/graph-node /usr/local/bin
RUN npm install -g @nevermined-io/graph-cli
RUN npm install --global yarn

WORKDIR /subgraphs
COPY . /subgraphs
RUN yarn

ENTRYPOINT [ "./scripts/entrypoint.sh" ]