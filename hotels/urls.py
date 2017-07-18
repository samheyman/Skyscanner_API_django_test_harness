from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'test_harness', views.test_harness, name='test_harness')
]