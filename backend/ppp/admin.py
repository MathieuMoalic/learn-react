from django.contrib import admin
from .models import TestModel  # add this


class TestAdmin(admin.ModelAdmin):  # add this
    list_display = ('title', 'description', 'completed')  # add this


# Register your models here.
admin.site.register(TestModel, TestAdmin)  # add this
