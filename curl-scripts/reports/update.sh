
API="http://localhost:4741"
URL_PATH="/reports/${ID}"

curl "${API}${URL_PATH}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Bearer ${TOKEN}" \
--data '{
  "report": {
    "info": "'"${INFO}"'"
  }
}'

echo
