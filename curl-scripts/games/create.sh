curl --include --request POST https://tic-tac-toe-wdi-production.herokuapp.com/games/ \
--header "Content-type: application/json" \
--header "Authorization: Token token=${TOKEN}" \

echo

# TOKEN="" sh games/create.sh
