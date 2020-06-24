FROM envoyproxy/envoy:v1.14.1

RUN apt update && apt install -y gettext

COPY ./envoy/envoy.yaml.tmpl /etc/envoy/envoy.yaml.tmpl
COPY ./envoy/docker-entrypoint.sh /

RUN chmod 500 /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
