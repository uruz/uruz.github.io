from django.http import HttpResponse
from django.views.generic import TemplateView


class RussianView(TemplateView):
    template_name = 'firtcond/russian.html'

russian = RussianView.as_view()


class EnglishView(TemplateView):
    template_name = 'firstcond/english.html'


english = EnglishView.as_view()
