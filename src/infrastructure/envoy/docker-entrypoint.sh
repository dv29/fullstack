#!/bin/sh
set -e

echo "Generating envoy.yaml config file..."
cat /etc/envoy/envoy.yaml.tmpl | envsubst \$ENVOY_ADMIN_PORT,\$ENVOY_GRPC_PORT,\$SERVICE_1_PORT > /etc/envoy/envoy.yaml

echo "Starting Envoy..."
# /usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l trace --log-path /tmp/envoy_info.log
# log options -> [trace][debug][info][warning|warn][error][critical][off]
/usr/local/bin/envoy -c /etc/envoy/envoy.yaml -l info
