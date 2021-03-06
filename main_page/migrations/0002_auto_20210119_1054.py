# Generated by Django 3.1.4 on 2021-01-19 04:54

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_page', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='certificate',
            name='user1_id',
            field=models.IntegerField(default=2602954),
        ),
        migrations.AddField(
            model_name='certificate',
            name='user2_id',
            field=models.IntegerField(default=8430458),
        ),
        migrations.AddField(
            model_name='certificate',
            name='user3_id',
            field=models.IntegerField(default=6605416),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='nominal',
            field=models.IntegerField(default=1, verbose_name='Номинал'),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='number',
            field=models.DecimalField(decimal_places=0, default='1901211054064873', max_digits=20, verbose_name='Номер сертификата'),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='published_date',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2021, 1, 19, 10, 54, 14, 64873), null=True),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='url',
            field=models.URLField(default='https://mcert.org/certificate/1901211054064873', max_length=255, verbose_name='Ссылка на серимфикат'),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='user1',
            field=models.CharField(default='Злата Иванова', max_length=30, verbose_name='1 user'),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='user2',
            field=models.CharField(default='Георгий Русаков', max_length=30, verbose_name='2 user'),
        ),
        migrations.AlterField(
            model_name='certificate',
            name='user3',
            field=models.CharField(default='Александр Корнилов', max_length=30, verbose_name='3 user'),
        ),
        migrations.AlterField(
            model_name='user',
            name='balance',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=6, verbose_name='balance'),
        ),
        migrations.AlterField(
            model_name='user',
            name='certificate_quantity',
            field=models.IntegerField(default=0, verbose_name='certificate quantity'),
        ),
        migrations.AlterField(
            model_name='user',
            name='date_joined',
            field=models.DateTimeField(default=datetime.datetime(2021, 1, 19, 10, 54, 14, 63902), verbose_name='date joined'),
        ),
        migrations.AlterField(
            model_name='user',
            name='emale',
            field=models.EmailField(max_length=50, verbose_name='email_field'),
        ),
        migrations.AlterField(
            model_name='user',
            name='language_code',
            field=models.CharField(default='en', max_length=10, verbose_name='language code'),
        ),
        migrations.AlterField(
            model_name='user',
            name='phone',
            field=models.CharField(blank=True, max_length=50, verbose_name='phone'),
        ),
        migrations.AlterField(
            model_name='user',
            name='telegram_id',
            field=models.IntegerField(blank=True, default=None, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='username',
            field=models.CharField(blank=True, max_length=50, verbose_name='username'),
        ),
    ]
