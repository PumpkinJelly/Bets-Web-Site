from django.contrib import admin
from django.urls import path
from views import home
from . import views

urlpatterns = [
    path("", home),
    path("home/", home, name="home"),
    path("bets/", views.BetsList.as_view(), name="bets_list"),
    path("admin/", admin.site.urls),
    path("api/ping/", views.ping, name="ping"),
    path("api/data/", views.get_data, name="get_data"),
]
