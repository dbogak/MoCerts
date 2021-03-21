from django.urls import path
from . import views

urlpatterns = [
    path('contacts/', views.contacts, name='contacts-home'),
    path('certificates/', views.certificates, name='certificates-home'),
    path('new_cert/', views.About, name='Создадим новый Сертификат'),
    path('', views.main_page, name='main_page'),
    path('about/', views.About, name='about')
]
