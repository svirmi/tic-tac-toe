FROM node:12

WORKDIR /app
RUN yarn global add gatsby-cli

# to prevent errors inside container
# use git with SSH instead of https
# git config --global url."https://github.com/".insteadOf "git@github.com:" && \

# source : https://medium.com/paperchain/fetching-private-github-repos-from-a-docker-container-273f25ec5a74

RUN git config --global user.email "spam_box@some.edu"
RUN git config --global user.name "spam_me"

#RUN gatsby new project https://github.com/gatsbyjs/gatsby-starter-hello-world

EXPOSE 8000

WORKDIR project

CMD ["gatsby", "develop", "-H", "0.0.0.0"]