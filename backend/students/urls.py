from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_students),
    path('all/', views.get_all_students),
]