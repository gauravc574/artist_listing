from django.contrib import admin
from . models import Product


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
	fieldsets = (
		(None,{
			'fields':('back_image','icon','address','number','email','title','display','slug','product_date','modified_date','votes','desc','whatsapp','hunter','facebook','twitter','instagram','owner','imageone','imagetwo','imagethree','imagefour')
		}),

	)
	prepopulated_fields = {'slug':('title',)}
	readonly_fields = ('modified_date',)
	search_field = ['title']