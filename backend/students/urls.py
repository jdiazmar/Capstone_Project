from django.urls import path
from . import views

urlpatterns = [
    path('', views.student_list),
    path('all/', views.student_detail),
]