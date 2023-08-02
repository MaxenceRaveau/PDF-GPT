from fastapi.testclient import TestClient
from app import app
client = TestClient(app)
def test_main_resource():
    response_auth = client.get("/")
    assert response_auth.status_code == 200

#We can add here more tests to check the health of our deployment
