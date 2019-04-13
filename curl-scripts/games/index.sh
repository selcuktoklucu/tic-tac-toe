curl --include --request GET https://tic-tac-toe-wdi.herokuapp.com/games/ \
    --header "Content-Type: application/json" \
    --header "Authorization: Token token=${TOKEN}" \
# 4 was at the end??

echo
# // --include gives some metadata, what is the response code
# // -- request GET
# // sh to run shell scripts
