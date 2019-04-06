curl "https://tic-tac-toe-wdi-production.herokuapp.com/sign-in" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo

# EMAIL="st1@st.com" PASSWORD="stst" sh auth/sign-in.sh
