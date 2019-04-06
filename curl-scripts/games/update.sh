curl --include --request PATCH "https://tic-tac-toe-wdi-production.herokuapp.com/games/${ID}" \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "game": {
      "cell": {
        "index": "'"${INDEX}"'",
        "value": "'"${VALUE}"'"
      },
      "over":  "'"${OVER}"'"
    }
  }'

echo

# TOKEN="" INDEX="" ID="" VALUE="" OVER="" sh games/update.sh
