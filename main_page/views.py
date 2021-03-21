from django.shortcuts import render
from django.http import HttpResponse
from .models import Certificate
from django.views import View
from django.views.generic import TemplateView


def main_page(request, *args, **kwargs):
    return render(request, 'main_page.html', {})

def home(request, *args, **kwargs):
    return render(request, 'main_page.html', {})

def contacts(request):
    return HttpResponse('<h2>Страница с контактами</h2>')

def certificates(request, *args, **kwargs):
    cert = Certificate()
    cert_num, url, nominal, user1, user2, user3, published_date = cert.new_cert()
    
    return render(request, 'cert_page.html', {'cert_num': cert_num}, {'url': url, 'nominal': nominal,
     'user1': user1, 'user2': user2, 'user3': user3, 'data': published_date})

def new_cert(request, *args, **kwargs):
    cert = Certificate()
    cert_num, url, nominal, user1, user2, user3, published_date = cert.new_cert()
    return render(request, 'cert_page.html', {'cert_num': cert_num})

def blog(request):
    return HttpResponse('<h2>blog</h2>')


class About(TemplateView):
    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        cert = Certificate()
        cert_num, url, nominal, user1, user2, user3, published_date = cert.new_cert()
        context['cert_num'] = cert_num
        return context
