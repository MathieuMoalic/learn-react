from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from ppp import views

router = routers.DefaultRouter()
router.register(r'testr', views.TestView, 'ppp')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls))
]
