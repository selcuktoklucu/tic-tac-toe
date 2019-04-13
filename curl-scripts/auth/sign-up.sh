curl "https://tic-tac-toe-wdi-production.herokuapp.com/sign-up" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"
    }
  }'
echo

# EMAIL="st@st.com" PASSWORD="stst" sh auth/sign-up.sh
