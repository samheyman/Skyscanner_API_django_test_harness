from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse


def index(request):
	return render(request, 'hotels/index.html')

def test_harness(request):
	return render(request, 'hotels/test_harness.html')
