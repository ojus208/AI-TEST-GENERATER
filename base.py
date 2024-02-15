import requests

res = requests.post('http://localhost:8000/test/check/38', json={"data":[['option2','6'],['option2','6']]})
print(res.text)