from django.shortcuts import render,redirect, reverse, get_object_or_404
from django.contrib.auth.decorators import login_required

from accounts.models import UserInput
from .models import Product



# def makeup(request):
# 	makeups = Product.objects.filter(category='Makeup_artist')
	
	
# 	return render(request, 'products/makeup.html', {'makeups':makeups})

# def hair(request):
# 	return render(request, 'products/hair.html')

# def nail(request):
# 	return render(request, 'products/mehendi.html')

# def mehendi(request):
# 	return render(request, 'products/nail.html')

# def tattoo(request):
# 	return render(request, 'products/tattoo.html')


def home(request):
	product = Product.objects.all()
	s_results = None
	search__title = request.GET.get('title')
	if search__title:
		s_results = Product.objects.filter(title__icontains=search__title)
	return render(request,'index.html',{'product':product, 's_results':s_results})

@login_required
def add(request):
	if request.method =='POST':
		if request.POST['title'] and request.POST['display'] and request.POST['owner'] and request.POST['address'] and request.POST['number'] and request.POST['desc'] and request.POST['category'] and request.POST['whatsapp'] and request.POST['twitter'] and request.POST['instagram'] and request.POST['facebook'] and request.POST['email'] and request.POST['slug'] and request.FILES['back_image'] and request.FILES['icon'] and request.FILES['imageone'] and request.FILES['imagetwo'] and request.FILES['imagethree'] and request.FILES['imagefour']:
			if Product.objects.filter(slug = request.POST['slug']).exists():
				return render(request, 'products/add.html',{'error':'Slug already used'})
			product = Product.objects.create(
				title = request.POST['title'],
				display = request.POST['display'],
				owner = request.POST['owner'], 
				address = request.POST['address'],
				number = request.POST['number'],
				category = request.POST['category'],
				desc = request.POST['desc'],
				whatsapp = request.POST['whatsapp'],
				twitter = request.POST['twitter'],
				instagram = request.POST['instagram'],
				facebook = request.POST['facebook'],
				email = request.POST['email'],
				back_image = request.FILES['back_image'],
				imageone = request.FILES['imageone'],
				imagetwo = request.FILES['imagetwo'],
				imagethree = request.FILES['imagethree'],
				imagefour = request.FILES['imagefour'],
				icon = request.FILES['icon'],
				hunter = request.user,
				slug = request.POST['slug'],
			)
			return redirect(product.get_absolute_url)
		else:
			return render(request, 'products/add.html',{'error':'All fields need to be filled'})
	else:
		return render(request, 'products/add.html')


def info(request,title):
	product = get_object_or_404(Product,slug=title)
	return render(request, 'products/profile.html',{'product':product})

@login_required
def upvote(request, title):
	product = get_object_or_404(Product,slug=title)
	ui_obj, unew = UserInput.objects.get_or_create(user=request.user, product=product,upvote=True)
	if not unew:
		ui_obj.upvote = False
		ui_obj.save()
	return redirect(request.GET.get('next'))



