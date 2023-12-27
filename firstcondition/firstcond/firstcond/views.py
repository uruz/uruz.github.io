from django.http import HttpResponse
from django.views.generic import TemplateView


class RussianView(TemplateView):
    template_name = 'russian.html'

    def get_context_data(self, **kwargs):
        context = super(RussianView, self).get_context_data(**kwargs)
        context.update({
            'lang': 'russian',
            'title': 'Первое необходимое условие',
        })
        return context


russian = RussianView.as_view()


class EnglishView(TemplateView):
    template_name = 'english.html'

    def get_context_data(self, **kwargs):
        context = super(EnglishView, self).get_context_data(**kwargs)
        context.update({
            'lang': 'english',
            'title': 'First required condition',
        })
        return context


english = EnglishView.as_view()
