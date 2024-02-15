from email.mime import base
from django.urls import path
from .views import generateTestView, gettestview, start_test, submit_test
from rest_framework.routers import SimpleRouter

router  = SimpleRouter()
# router.register('test',gettestview, basename="test-get" )


urlpatterns = [
    path("new/", generateTestView, name="generate test view"),
    path("<int:id>", gettestview, name="get test view"),
    path("submit/<int:id>",submit_test , name="get test view"),
    path("start/<int:id>",start_test , name="get test view"),
]