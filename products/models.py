from django.db import models
from django.contrib.auth.models import User
from django.conf import settings
from django.urls import reverse
from django.utils.functional import cached_property
from django.utils import timezone



 
class Product(models.Model):
	title = models.CharField(max_length=255)
	display = models.CharField(max_length=255)
	slug = models.SlugField(max_length=50)
	category = models.CharField(max_length=255)
	owner = models.CharField(max_length=255)
	address = models.TextField(max_length=10000)
	number = models.IntegerField()
	back_image = models.ImageField(upload_to='products/')
	icon = models.ImageField(upload_to='icons/')
	desc = models.TextField(max_length=10000)
	whatsapp = models.URLField(max_length=255)
	twitter = models.URLField(max_length=255)
	instagram = models.URLField(max_length=255)
	facebook = models.URLField(max_length=255)
	email = models.URLField(max_length=255)
	imageone = models.ImageField(upload_to='gallery/')
	imagetwo = models.ImageField(upload_to='gallery/')
	imagethree = models.ImageField(upload_to='gallery/')
	imagefour = models.ImageField(upload_to='gallery/')
	
	
	added_date = models.DateTimeField(auto_now_add=True)
	product_date = models.DateTimeField(auto_now=True)
	modified_date = models.DateTimeField(auto_now=True)
	
	
	
	hunter = models.ForeignKey(User, on_delete=models.CASCADE, related_name="product_hunter")

	def __str__(self):
		return self.title

	def gdate(self):
		return self.product_date.strftime('%b %e %Y')

	def trim(self):
		return (self.desc[:40]+"...") if len(self.desc) > 40 else self.desc

	@cached_property
	def get_absolute_url(self):
		return reverse('info', args=[self.slug]) 

