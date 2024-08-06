#!/bin/bash

# OpenSearch配置
OPENSEARCH_URL="https://10.1.1.17:9200"
USERNAME="admin"
PASSWORD="NpBPagTwd4"

# 索引列表
INDICES=("ueba-alerts" "ueba-user-activities" "ueba-alert-rules" "ueba-sensitive-data" "ueba-applications")

# 删除所有已存在的索引
for INDEX in "${INDICES[@]}"
do
    echo "Deleting index (if exists): $INDEX"
    curl -X DELETE "$OPENSEARCH_URL/$INDEX" \
         -u "$USERNAME:$PASSWORD" \
         -k
    echo -e "\n"
done

# 读取索引定义文件
INDEX_DEFINITION=$(cat opensearch-indices-curl.json)

# 创建每个索引
for INDEX in "${INDICES[@]}"
do
    echo "Creating index: $INDEX"
    MAPPING=$(echo "$INDEX_DEFINITION" | jq ".mappings.$INDEX")
    REQUEST_BODY=$(jq -n \
                      --argjson settings "$(echo "$INDEX_DEFINITION" | jq .settings)" \
                      --argjson mapping "$MAPPING" \
                      '{settings: $settings, mappings: $mapping}')

    curl -X PUT "$OPENSEARCH_URL/$INDEX" \
         -H "Content-Type: application/json" \
         -u "$USERNAME:$PASSWORD" \
         -k \
         -d "$REQUEST_BODY"
    echo -e "\n"
done

echo "All indices deletion and creation attempts completed."

# 验证索引创建
echo "Verifying created indices:"
curl -X GET "$OPENSEARCH_URL/_cat/indices?v" \
     -u "$USERNAME:$PASSWORD" \
     -k