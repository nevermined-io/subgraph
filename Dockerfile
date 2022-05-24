FROM graphprotocol/graph-node:v0.26.0

RUN apt-get update
RUN apt-get install -y curl git jq wget

# Install yq
RUN wget https://github.com/mikefarah/yq/releases/download/v4.18.1/yq_linux_amd64 -O yq
RUN install yq /usr/bin

RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -

RUN apt-get install -y nodejs

# COPY --from=graph-node /usr/local/bin/graph-node /usr/local/bin
RUN npm install -g @nevermined-io/graph-cli
RUN npm install --global yarn

WORKDIR /subgraphs
COPY . /subgraphs
RUN yarn

ENTRYPOINT [ "./scripts/entrypoint.sh" ]