from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import Http404, HttpResponse
from django.contrib import auth
from django.contrib.auth.models import User
from django.core.exceptions import ObjectDoesNotExist

# def home(request):
# 	return render(request,'index.html')



def login(request):
	if request.method == 'POST':
		user = auth.authenticate(username=request.POST['email'],password=request.POST['password'])
		if user is not None:
			auth.login(request,user)
			return redirect('home')
		else:
			return render(request, 'acc/login.html', {'error':'User not found :( '})
	else:
		return render(request,'acc/login.html')

def signup(request):
	if request.method == 'POST':
		if request.POST['password'] == request.POST['password2']:
			try:
				User.objects.get(username=request.POST['email'])
				return render(request,'acc/signup.html',{'error':'Email already exists !'})
			except ObjectDoesNotExist:
				user = User.objects.create_user(request.POST['email'],password=request.POST['password'])
				return redirect('home')
		else:
			return render(request,'acc/signup.html', {'error':'Password do not match'})
	else:
		return render(request,'acc/signup.html')


@login_required
def logout(request):
	if request.method == 'POST':
		auth.logout(request)
		return redirect('home')
	return render(request,'acc/signup.html')
